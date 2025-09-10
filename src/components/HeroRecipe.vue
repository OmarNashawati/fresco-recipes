<script setup>
import { useRecipes } from '@/composables/useRecipes';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const { recipes, loading, error, fetchRandomRecipes } = useRecipes();

onMounted(async () => {
  fetchRandomRecipes(1);
});
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error: {{ error.message }}</p>
  <section v-if="!loading && !error">
    <div
      v-for="recipe in recipes"
      class="flex flex-col md:flex-row rounded overflow-hidden h-[450px] bg-orange-500 text-white"
    >
      <div class="h-[60%] md:h-full w-full md:w-[70%] bg-amber-200">
        <img class="h-full w-full object-cover" :src="recipe.image" :alt="recipe.title" />
      </div>

      <div class="px-2 py-3 flex flex-col items-center justify-center flex-1">
        <h1 class="text-2xl font-bold text-center">{{ recipe.title }}</h1>
        <div v-if="recipe.country && recipe.category" class="flex gap-2 pt-2">
          <p>{{ recipe.country }}</p>
          <span>•</span>
          <p>{{ recipe.category }}</p>
        </div>
        <RouterLink
          :to="{ name: 'recipe-details', params: { id: recipe.id } }"
          class="mt-5 px-5 py-2 rounded-4xl bg-orange-700 hover:bg-orange-800 cursor-pointer"
        >
          Get Recipe
        </RouterLink>
      </div>
    </div>
  </section>
</template>
