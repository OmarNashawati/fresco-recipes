<script setup>
import RecipeCard from './RecipeCard.vue';
const props = defineProps(['recipes', 'loading', 'error']);
</script>

<template>
  <div class="flex-1">
    <p class="mb-2"><strong>Result:</strong> {{ recipes.length }} recipe</p>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <RecipeCard v-for="recipe of recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>
