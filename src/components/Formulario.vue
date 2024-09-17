<!-- FormComponent.vue -->
<template>
    //Esta directiva se usa para manejar eventos de formulario
    <form @submit.prevent="datosForm" class="space-y-4">
        <div>
            <label for="name" class="block text-sm font-medium">Name:</label>
            <input type="text" v-model="name" id="name" required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>

        <div>
            <label for="email" class="block text-sm font-medium">Email:</label>
            <input type="email" v-model="email" id="email" required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>

        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
            Submit
        </button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'FormComponent',
    setup(_, { emit }) {
        const name = ref<string>('');  // Declare reactive variables with types
        const email = ref<string>('');

        const datosForm = () => {
            const formData = {
                name: name.value,
                email: email.value
            };
            emit('submit', formData);
        };

        return {
            name,
            email,
            datosForm
        };
    }
});
</script>
