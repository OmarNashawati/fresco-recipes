<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="shadow h-[60px] px-8">
    <div class="flex justify-between items-center max-w-[1200px] h-full m-auto">
      <RouterLink :to="{ name: 'home' }" class="text-2xl font-bold text-orange-400"
        >Fresco Recipes</RouterLink
      >
      <div class="flex gap-4 h-full">
        <RouterLink
          :to="{ name: 'recipes' }"
          class="px-4 flex items-center hover:bg-orange-400 hover:text-white"
          >Recipes</RouterLink
        >
        <RouterLink
          :to="{ name: 'ingredients' }"
          class="px-4 flex items-center hover:bg-orange-400 hover:text-white"
          >Ingredients</RouterLink
        >
      </div>
    </div>
  </header>
</template>
