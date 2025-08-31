<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />

  <main class="p-8 max-w-[1200px] m-auto">
    <RouterView />
  </main>
</template>
