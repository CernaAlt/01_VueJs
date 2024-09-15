<Script setup lang="ts">
//import ref from vue to use reactive variables in the component
import { ref } from 'vue'

//variables
const count = ref(0)


//Practice Reactive
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: ''
})


</Script>

<template>
    <section>
        <div>
            <button @click="count++">Incrementar</button>
            <span>{{ count }}</span>
            <button @click="count--">Decrementar</button>
        </div>
    </section>

    <section>
        <h1 class="text-2xl font-bold">Reactividad - Formulario</h1>

        <input 
            v-model="form.firstName" 
            type="text" 
            placeholder="Nombre"
            class="border border-gray-300 rounded py-2 px-4 mb-4" />

        <input 
            v-model="form.lastName" 
            type="text" 
            placeholder="Apellido"
            class="border border-gray-300 rounded py-2 px-4" />

        <p class="mt-4">Nombre completo: {{ form.firstName }} {{ form.lastName }}</p>
    <section>

    
    <section>


    </section>
</template>