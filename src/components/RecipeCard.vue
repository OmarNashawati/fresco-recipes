<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['recipe']);
</script>

<template>
  <div class="bg-white shadow rounded hover:scale-105">
    <RouterLink :to="{ name: 'recipe-details', params: { id: recipe.id } }">
      <img class="object-cover w-full h-48 rounded-t" :src="recipe.image" :alt="recipe.title" />
    </RouterLink>
    <div class="p-2">
      <p class="text-2xl font-semibold">{{ recipe.title }}</p>
      <p>{{ recipe.country }}</p>
    </div>
  </div>
</template>
