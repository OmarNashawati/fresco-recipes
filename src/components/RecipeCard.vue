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
      <div v-if="recipe.country && recipe.category" class="flex gap-2 pt-2">
        <p>{{ recipe.country }}</p>
        <span>•</span>
        <p>{{ recipe.category }}</p>
      </div>
    </div>
  </div>
</template>
