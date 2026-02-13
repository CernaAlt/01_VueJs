<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

type ItunesSong = {
  trackId: number
  trackName: string
  artistName: string
  collectionName: string
  artworkUrl100?: string
  previewUrl?: string
}

type RadioStation = {
  stationuuid: string
  name: string
  country: string
  tags: string
  favicon: string
  url_resolved: string
}

type FavoriteItem = {
  id: string
  title: string
  subtitle: string
  image?: string
  previewUrl: string
  source: 'iTunes' | 'RadioBrowser'
}

const query = ref('shakira')
const radioQuery = ref('pop')
const songs = ref<ItunesSong[]>([])
const radios = ref<RadioStation[]>([])
const favorites = ref<FavoriteItem[]>([])
const loadingSongs = ref(false)
const loadingRadio = ref(false)
const errorSongs = ref('')
const errorRadio = ref('')

const activeTab = ref<'songs' | 'radios' | 'favorites'>('songs')

const currentAudio = ref('')

const isFavorite = (id: string) => favorites.value.some((item) => item.id === id)

const favoriteCountText = computed(() =>
  favorites.value.length === 1 ? '1 favorito' : `${favorites.value.length} favoritos`
)

const saveFavorites = () => {
  localStorage.setItem('music-hub-favorites', JSON.stringify(favorites.value))
}

const loadFavorites = () => {
  const rawData = localStorage.getItem('music-hub-favorites')
  if (!rawData) return

  try {
    favorites.value = JSON.parse(rawData)
  } catch {
    favorites.value = []
  }
}

const searchSongs = async () => {
  loadingSongs.value = true
  errorSongs.value = ''

  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query.value)}&entity=song&limit=18`
    )

    if (!response.ok) {
      throw new Error('No se pudo obtener información de iTunes.')
    }

    const data = await response.json()
    songs.value = data.results
  } catch {
    errorSongs.value = 'No fue posible consultar iTunes en este momento.'
    songs.value = []
  } finally {
    loadingSongs.value = false
  }
}

const searchRadios = async () => {
  loadingRadio.value = true
  errorRadio.value = ''

  try {
    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/search?name=${encodeURIComponent(radioQuery.value)}&limit=18&hidebroken=true`
    )

    if (!response.ok) {
      throw new Error('No se pudo consultar Radio Browser.')
    }

    radios.value = await response.json()
  } catch {
    errorRadio.value = 'No fue posible consultar emisoras en este momento.'
    radios.value = []
  } finally {
    loadingRadio.value = false
  }
}

const addSongToFavorites = (song: ItunesSong) => {
  if (!song.previewUrl || isFavorite(`song-${song.trackId}`)) return

  favorites.value.push({
    id: `song-${song.trackId}`,
    title: song.trackName,
    subtitle: `${song.artistName} · ${song.collectionName}`,
    image: song.artworkUrl100,
    previewUrl: song.previewUrl,
    source: 'iTunes'
  })
}

const addRadioToFavorites = (radio: RadioStation) => {
  if (!radio.url_resolved || isFavorite(`radio-${radio.stationuuid}`)) return

  favorites.value.push({
    id: `radio-${radio.stationuuid}`,
    title: radio.name,
    subtitle: `${radio.country} · ${radio.tags || 'Sin etiquetas'}`,
    image: radio.favicon,
    previewUrl: radio.url_resolved,
    source: 'RadioBrowser'
  })
}

const removeFavorite = (id: string) => {
  favorites.value = favorites.value.filter((item) => item.id !== id)
}

watch(favorites, saveFavorites, { deep: true })

onMounted(async () => {
  loadFavorites()
  await Promise.all([searchSongs(), searchRadios()])
})
</script>

<template>
  <div class="app-shell">
    <header class="hero">
      <h1>Music Hub Multiplataforma</h1>
      <p>
        Explora canciones y estaciones en vivo desde diferentes APIs para centralizar tu
        descubrimiento musical en una sola app.
      </p>
    </header>

    <nav class="tabs">
      <button :class="{ active: activeTab === 'songs' }" @click="activeTab = 'songs'">Canciones (iTunes)</button>
      <button :class="{ active: activeTab === 'radios' }" @click="activeTab = 'radios'">Radio en vivo (RadioBrowser)</button>
      <button :class="{ active: activeTab === 'favorites' }" @click="activeTab = 'favorites'">
        Favoritos · {{ favoriteCountText }}
      </button>
    </nav>

    <section v-if="activeTab === 'songs'" class="panel">
      <form class="search" @submit.prevent="searchSongs">
        <input v-model="query" type="text" placeholder="Busca artista, canción o álbum" />
        <button type="submit">Buscar</button>
      </form>

      <p v-if="loadingSongs" class="helper">Consultando iTunes…</p>
      <p v-if="errorSongs" class="error">{{ errorSongs }}</p>

      <div class="grid">
        <article v-for="song in songs" :key="song.trackId" class="card">
          <img :src="song.artworkUrl100 || 'https://placehold.co/200x200?text=Sin+imagen'" :alt="song.trackName" />
          <h3>{{ song.trackName }}</h3>
          <p>{{ song.artistName }}</p>
          <small>{{ song.collectionName }}</small>

          <audio v-if="song.previewUrl" controls :src="song.previewUrl" @play="currentAudio = song.previewUrl" />
          <p v-else class="helper">No hay preview disponible.</p>

          <button
            class="secondary"
            :disabled="!song.previewUrl || isFavorite(`song-${song.trackId}`)"
            @click="addSongToFavorites(song)"
          >
            {{ isFavorite(`song-${song.trackId}`) ? 'Guardado' : 'Guardar en favoritos' }}
          </button>
        </article>
      </div>
    </section>

    <section v-if="activeTab === 'radios'" class="panel">
      <form class="search" @submit.prevent="searchRadios">
        <input v-model="radioQuery" type="text" placeholder="Busca emisoras por nombre o género" />
        <button type="submit">Buscar</button>
      </form>

      <p v-if="loadingRadio" class="helper">Consultando RadioBrowser…</p>
      <p v-if="errorRadio" class="error">{{ errorRadio }}</p>

      <div class="grid">
        <article v-for="radio in radios" :key="radio.stationuuid" class="card">
          <img :src="radio.favicon || 'https://placehold.co/200x200?text=Radio'" :alt="radio.name" />
          <h3>{{ radio.name }}</h3>
          <p>{{ radio.country }}</p>
          <small>{{ radio.tags || 'Sin etiquetas' }}</small>

          <audio v-if="radio.url_resolved" controls :src="radio.url_resolved" @play="currentAudio = radio.url_resolved" />
          <p v-else class="helper">No hay stream disponible.</p>

          <button
            class="secondary"
            :disabled="!radio.url_resolved || isFavorite(`radio-${radio.stationuuid}`)"
            @click="addRadioToFavorites(radio)"
          >
            {{ isFavorite(`radio-${radio.stationuuid}`) ? 'Guardado' : 'Guardar en favoritos' }}
          </button>
        </article>
      </div>
    </section>

    <section v-if="activeTab === 'favorites'" class="panel">
      <p class="helper" v-if="favorites.length === 0">
        Aún no tienes favoritos. Guarda previews o radios desde las otras pestañas.
      </p>

      <div class="grid">
        <article v-for="item in favorites" :key="item.id" class="card">
          <img :src="item.image || 'https://placehold.co/200x200?text=Music+Hub'" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
          <small>Fuente: {{ item.source }}</small>

          <audio controls :src="item.previewUrl" @play="currentAudio = item.previewUrl" />

          <button class="danger" @click="removeFavorite(item.id)">Eliminar</button>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  color: #e5e7eb;
}

.hero {
  background: linear-gradient(135deg, #1f2937, #111827);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tabs button,
.search button,
.card button {
  border: 0;
  border-radius: 10px;
  padding: 0.65rem 0.95rem;
  font-weight: 600;
  cursor: pointer;
}

.tabs button {
  background: #1f2937;
  color: #e5e7eb;
}

.tabs button.active {
  background: #2563eb;
}

.panel {
  background: #111827;
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 1rem;
}

.search {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.search input {
  flex: 1;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 10px;
  color: #e5e7eb;
  padding: 0.65rem;
}

.search button {
  background: #2563eb;
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
}

.card h3 {
  font-weight: 700;
}

.card p,
.card small,
.helper {
  color: #9ca3af;
}

.card audio {
  width: 100%;
}

.card .secondary {
  background: #0f766e;
  color: #fff;
}

.card .danger {
  background: #dc2626;
  color: #fff;
}

.error {
  color: #fca5a5;
}
</style>
