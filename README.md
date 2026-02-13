# Music Hub Multiplataforma (Vue 3 + TypeScript)

Aplicación base para descubrir música en una sola interfaz usando **múltiples APIs públicas**:

- **iTunes Search API** para canciones y previews.
- **Radio Browser API** para estaciones de radio online en vivo.

> ⚠️ Tener “toda la música de internet” en una sola app no es viable con APIs públicas abiertas por límites de licencias, catálogos cerrados y derechos de reproducción. Este proyecto propone una arquitectura realista y extensible.

## Funcionalidades actuales

- Búsqueda de canciones por artista, track o álbum.
- Reproducción de previews desde iTunes.
- Búsqueda de radios por nombre o género.
- Reproducción de stream de radio en vivo.
- Gestión de favoritos con persistencia en `localStorage`.

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Próximos pasos recomendados

1. Integrar autenticación (OAuth) para Spotify/YouTube Music/Deezer.
2. Crear un backend agregador que unifique resultados y maneje rate limits.
3. Añadir reproducción continua con cola y reproductor global.
4. Aplicar analítica de búsqueda y recomendaciones personalizadas.
