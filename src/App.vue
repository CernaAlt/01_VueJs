<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Card from './components/Card.vue'
import Directivas from './components/Directivas.vue';
import Eventos from './components/Eventos.vue';

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <section class="bg-white text-black p-10">
    <h1 class="text-2xl font-bold">Componentes</h1>
  </section>

  <section class="bg-white text-black p-10">
    <h2 class="text-2xl font-bold">Reactividad</h2>
    <div class="container mx-auto border p-5">
      <div class="greetings">
        <h1>¡Hola mundo!</h1>
        <h3>¡Bienvenido a tu primera aplicación Vue.js!</h3>
      </div>

      <Card title="Soluciones Web " content="Es un curso del octavo siglo">
       <h1>Hola a todos</h1>
      </Card>
    </div>


  </section>

  <section class="bg-white text-black p-10">
    <h1 class="text-2xl font-bold">Directivas</h1>
    <Directivas />
  </section>

  <section class="bg-white text-black p-10">
    <h1 class="text-2xl font-bold">Eventos</h1>
    <Eventos />
  </section>



  


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
