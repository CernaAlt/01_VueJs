<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'



//slot
import ComponenteHijo from './components/slots/ComponenteHijo.vue';
import Card from './components/Cards/Card.vue'
import ComponenteHijo01 from './components/slots/ComponenteHijo01.vue';
import ComponenteHijo02 from './components/slots/ComponenteHijo02.vue';

//reactividad
import Ejemplo from './components/Reactivida/Ejemplo.vue';

//Eventos
import Eventos from './components/events/Eventos.vue';

//Directivas
import Directivas from './components/directives/Directivas.vue';

//Formulario
import Formulario from './components/Formulario.vue';

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
   

    <!--Componenetes-->
    <section class="bg-white text-black p-10">
      <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">Componentes</h1>
      <p class="text-ml font-sans text-justify py-3">
        En Vue.js, los componentes son piezas reutilizables
        de código que encapsulan una parte de la interfaz de usuario. Son una de las
        características más importantes de Vue y te permiten
        dividir tu aplicación en secciones pequeñas y manejables.
        Cada componente puede tener su propia lógica, estructura y estilos
      </p>

      <!--Componenetes Iniciales-->
      <div class="flex gap-2 mt-5">
        <Card title="Componente 01" content="La estrtura de este componenete lo podemos
         en diferentes parte de nuestra web">

        </Card>

        <Card title="Componente 01" content="La estrtura de este componenete lo podemos
         en diferentes parte de nuestra web">

        </Card>

        <Card title="Componente 01" content="La estrtura de este componenete lo podemos
         en diferentes parte de nuestra web">

        </Card>


      </div>

      <!--Esplicacion de los slot-->
      <div class="mt-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">Componenetes + slot</h1>
        <p class="text-ml font-sans text-justify py-3">
          En Vue.js, los slots son una característica avanzada que permite a los
          componentes recibir contenido dinámico de sus componentes padres, dándote
          mayor flexibilidad para personalizar la interfaz de usuario.
        </p>

        <div class="flex gap-3">
          <ComponenteHijo>
            <h1>Este es un contenido dentro del slote del componente hijo</h1>
          </ComponenteHijo>

          <ComponenteHijo>
            <h1>Este es un contenido dentro del slote del componente hijo</h1>
          </ComponenteHijo>
        </div>

        <!--Slot con nombre-->
        <div>
          <h1 class="text-md font-bold border-b-2 border-cyan-400 text-center my-5">Slot con nombres</h1>

          <!--Aqui podemos podemos poner los componenetes-->
          <div class="flex gap-3">

            <ComponenteHijo01>
              <template v-slot:header>
                <h1>Encabezado personalizado</h1>
              </template>


              <p>Este es el contenido principal.</p>

              <template v-slot:footer>
                <p>Este es el pie de página personalizado.</p>
              </template>

            </ComponenteHijo01>


            <ComponenteHijo01>
              <template v-slot:header>
                <h1>Encabezado personalizado</h1>
              </template>


              <p>Este es el contenido principal.</p>

              <template v-slot:footer>
                <p>Este es el pie de página personalizado.</p>
              </template>
            </ComponenteHijo01>
          </div>

        </div>

      </div>

      <!--Componenetes Hijo Pasa datos al Padre-->
      <div class="mt-10 ">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">Pasar datos de un componente hijo a un
          padre
        </h1>

        <div class="flex gap-5 mt-1">
          <ComponenteHijo02 v-slot="{ user }">
            <p>Nombre del usuario: {{ user.nombre }}</p>
            <p>Edad del usuario: {{ user.edad }}</p>
            <p>Genero: {{ user.genero }}</p>
          </ComponenteHijo02>

          <ComponenteHijo02 v-slot="{ user }">
            <p>Nombre del usuario: {{ user.nombre }}</p>
            <p>Edad del usuario: {{ user.edad }}</p>
            <p>Genero: {{ user.genero }}</p>
          </ComponenteHijo02>
        </div>

      </div>
    </section>

    <!--Reactividad-->
    <section class="">
      <h1 class="text-2xl font-bold text-center text-white my-5">Reactive</h1>
      <Ejemplo/>

    </section>

    <!--Directivas-->
    <section>
      <h1 class="text-2xl font-bold text-center text-white my-5">Directivas</h1>
      <Directivas />
    </section>


    <!--Eventos-->
    <section class="">
      <h1 class="text-2xl font-bold text-center text-white my-5">Eventos</h1>
      <Eventos />
    </section>

    <!--formulario-->
    <section >
      <h1 class="text-2xl font-bold text-center text-white my-5">Eventos</h1>
      <Formulario/>
    </section>

  </main>

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
