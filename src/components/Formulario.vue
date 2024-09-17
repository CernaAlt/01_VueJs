<!-- FormComponent.vue -->
<template>
    <section class="bg-white text-black p-10">
        <!-- Esta directiva se usa para manejar eventos de formulario -->
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
    </section>

    <!-- Datos Registrados -->
    <section class="bg-white text-black p-10">
        <h2 class="text-xl font-bold mt-4">Datos Registrados</h2>
        <ul>
            <li v-for="(item, index) in registros" :key="index" class="flex justify-between items-center mt-2">
                <!---Renderizamoslos la-->
                <div class="border-b-2">
                    <p><strong>Name:</strong> {{ item.name }}</p>
                    <p><strong>Email:</strong> {{ item.email }}</p>
                </div>

                <!--Opciones-->
                <div>
                    <button @click="editarRegistro(index)"
                        class="bg-yellow-500 text-white py-1 px-2 rounded mr-2">Editar</button>
                    <button @click="eliminarRegistro(index)"
                        class="bg-red-500 text-white py-1 px-2 rounded">Eliminar</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({

    setup() {
        //variables
        const name = ref<string>('');
        const email = ref<string>('');

        //lista registro
        const registros = ref<{ name: string, email: string }[]>([]);

        // Computed property to get the form data as an object
        const formData = computed(() => ({
            name: name.value,
            email: email.value
        }));

        
        //agreamos los datos a la lista registros
        const datosForm = () => {
            // Use the computed formData object
            registros.value.push(formData.value);
            name.value = '';
            email.value = '';
        };

        //funcion para editar los registro
        const editarRegistro = (index: number) => {
            const registro = registros.value[index];
            name.value = registro.name;
            email.value = registro.email;
            registros.value.splice(index, 1);
        };

        //funcion para eliminar un registro
        const eliminarRegistro = (index: number) => {
            registros.value.splice(index, 1);
        };

        //retornamos las variables y metodos
        return {
            name,
            email,
            registros,
            datosForm,
            editarRegistro,
            eliminarRegistro
        };
    }
});
</script>
