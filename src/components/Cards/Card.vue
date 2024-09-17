<template>
    <div class="border border-gray-300 p-4 rounded">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="mt-2">{{ content }}</p>
      <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    content: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>
/* Add any styles for the card component here */
</style>

  