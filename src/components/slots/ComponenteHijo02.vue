<template>
    <div class="border p-5">
        <!-- El slot pasa un objeto al padre -->
        <slot :user="usuario"></slot>
    </div>
</template>

<script setup lang="ts">
// Definir una interfaz para el objeto `usuario`
interface Usuario {
  nombre: string;
  edad: number;
  genero: string;
}

// Definir la variable `usuario` con el tipo `Usuario`
const usuario: Usuario = {
  nombre: 'Juan',
  edad: 25,
  genero: 'Masculino'
};
</script>
