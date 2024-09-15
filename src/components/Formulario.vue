<!-- FormComponent.vue -->
<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">
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
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormComponent',
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            const formData = {
                name: this.name,
                email: this.email
            };
            this.$emit('submit', formData);
        }
    }
});
</script>