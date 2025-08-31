<script setup>
import RecipesList from '@/components/RecipesList.vue';
import { useRecipes } from '@/composables/useRecipes';
import { onMounted } from 'vue';
const { recipes, loading, error, fetchRandomRecipes } = useRecipes();

onMounted(() => {
  fetchRandomRecipes();
});
</script>

<template>
  <h1 class="font-bold text-orange-500 text-3xl">Random Recipes</h1>
  <RecipesList :loading="loading" :error="error" :recipes="recipes" />
</template>
