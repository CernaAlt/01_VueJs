<script setup lang="ts">

import { ref } from 'vue'

//Event @click
//variables
const counter = ref(0)

//
const increment = () => {
  counter.value++
}

//Event @input
const textInput = ref('')

const handleInput = (event: Event) => {
  textInput.value = (event.target as HTMLInputElement).value
}

//Event @change
const selectedOption = ref('')

const handleChange = (event: Event) => {
  selectedOption.value = (event.target as HTMLSelectElement).value
}


//Event @submit.prevent
const formData = ref({
  name: '',
  email: ''
})

const handleSubmit = () => {
  alert(`Nombre: ${formData.value.name}, Email: ${formData.value.email}`)
}


</script>

<template>


    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3">Eventos - Click</h1>

        <!-- Usamos @click para manejar el evento -->
        <button @click="increment" class="bg-blue-500 text-white py-2 px-4 rounded">
            Incrementar contador
        </button>
        <p class="mt-4">Valor del contador: {{ counter }}</p>
    </section>

    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3">Eventos - Input</h1>

        <!-- Usamos @input para manejar el evento -->
        <input 
            type="text" 
            class="border border-gray-300 rounded py-2 px-4"
            @input="handleInput"
            placeholder="Escribe algo" />

        <p class="mt-4">Has escrito: {{ textInput }}</p>

    </section>

    <section class="bg-white text-black p-10">

        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3">Eventos - Change</h1>

        <!-- Usamos @change para manejar el evento -->
        <select @change="handleChange" class="border border-gray-300 rounded py-2 px-4">
            <option value="" disabled selected>Elige una opción</option>
            <option value="Opción 1">Opción 1</option>
            <option value="Opción 2">Opción 2</option>
            <option value="Opción 3">Opción 3</option>
        </select>

        <p class="mt-4">Has seleccionado: {{ selectedOption }}</p>
    </section>

    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center mb-3">Eventos - Submit</h1>

        <!-- Usamos @submit.prevent para manejar el evento de envío y evitar que recargue la página -->
        <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
            <input 
                type="text" 
                v-model="formData.name" 
                placeholder="Nombre"
                class="border border-gray-300 rounded py-2 px-4" />

            <input 
                type="email" 
                v-model="formData.email" 
                placeholder="Correo electrónico"
                class="border border-gray-300 rounded py-2 px-4" />

            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
                Enviar
            </button>
        </form>

        <p class="mt-4">Nombre: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
    </section>

</template>