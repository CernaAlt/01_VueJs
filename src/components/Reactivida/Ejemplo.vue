<script setup lang="ts">
// Import ref from Vue to use reactive variables in the component
import { ref, reactive, computed } from 'vue'

// Variables
const count = ref(0)

// Practice Reactive with an object
const form = reactive({
    // Declare the properties of the object
    firstName: '',
    lastName: '',
    age: 0
})

//computed: returns a calculated value based on reactive dependencies
const fullName = computed(() => `${form.firstName} ${form.lastName}`)
</script>

<template>
    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center">01: Ejemplo</h1>
        <div class="flex gap-5 py-3">
            <button class="border rounded bg-slate-600 text-cyan-500 p-3" @click="count++">Incrementar</button>
            <span class="boder ">{{ count }}</span>
            <button class="border rounded bg-slate-600 text-cyan-500 p-3" @click="count--">Decrementar</button>
        </div>
    </section>

    <section class="bg-white text-black p-10">
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center my-4">Reactividad - Formulario</h1>

        <input v-model="form.firstName" type="text" placeholder="Nombre"
            class="border border-gray-300 rounded py-2 px-4 mb-4" />

        <input v-model="form.lastName" type="text" placeholder="Apellido"
            class="border border-gray-300 rounded py-2 px-4" />



        <input v-model="form.age" type="number" placeholder="Edad" class="border border-gray-300 rounded py-2 px-4" />

        <p class="mt-4">Nombre completo: {{ form.firstName }} {{ form.lastName }} Edad: {{ form.age }}</p>
    </section>

    <section class="bg-white text-black p-10">
        <!-- Mostrar la propiedad computada -->
        <h1 class="text-2xl font-bold border-b-2 border-cyan-400 text-center my-4">Propiedad Computada</h1>
        <p></p>
        <p>Nombre completo: {{ fullName }}</p>
    </section>
</template>
