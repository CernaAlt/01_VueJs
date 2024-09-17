<script setup lang="ts">

//practice with v-if and v-else
//import ref 
import { ref } from 'vue'

//variables
const showText = ref(true)

//Practice v-For
const cadenaElementos = ref<string[]>(['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'])

//Practice v-Model
const inputValue = ref('')


//practice v-bind
const isActive = ref(true)
const buttonClass = ref('bg-blue-500')

</script>

<template>
    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">01: v-if y v-else</h1>
        <!--v-if y v-else-->
        <div class="mt-4">
            <button @click="showText = !showText" class="bg-blue-500 text-white py-2 px-4 rounded">
                Toggle Mensaje
            </button>
        </div>

        <p v-if="showText" class="mt-4 text-green-500">Este es un mensaje que se muestra cuando showMessage es
            verdadero.</p>
        <p v-else class="mt-4 text-red-500">Este es un mensaje alternativo cuando showMessage es falso.</p>

    </section>

    <section class="bg-white text-black p-10">
        <!-- Usamos v-for para iterar sobre una lista -->
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">02: v-for</h1>
        <ul class="mt-4">
            <li v-for="(item, index) in cadenaElementos" :key="index" class="py-2">
                {{ index + 1 }}. {{ item }}
            </li>
        </ul>
    </section>

    <section class="bg-white text-black p-10">
        <!-- Usamos v-model para enlazar el input con la variable -->
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3">03: v-model</h1>
        <input v-model="inputValue" class="border border-gray-300 rounded py-2 px-4" placeholder="Escribe algo" />

        <p class="mt-4 text-lg">Has escrito: {{ inputValue }}</p>
    </section>

    <section class="bg-white text-black p-10">

        <!-- Usamos v-bind para enlazar dinámicamente la clase del botón -->
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3"> 04: v-bind</h1>
        <button :class="buttonClass"
            @click="isActive = !isActive; buttonClass = isActive ? 'bg-blue-500' : 'bg-red-500'"
            class="text-white py-2 px-4 rounded">
            Cambiar color
        </button>

        <p class="mt-4" v-bind:class="{ 'text-green-500': isActive, 'text-red-500': !isActive }">
            El botón está {{ isActive ? 'activo' : 'inactivo' }}.
        </p>
    </section>

</template>
