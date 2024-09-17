<template>
    <div class="border p-5">
      <header class="border-b text-center">
        <slot name="header"></slot>
      </header>

      <main>
        <!-- Slot por defecto -->
        <slot></slot> 
      </main>

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  