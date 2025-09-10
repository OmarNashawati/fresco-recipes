<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRecipes } from '@/composables/useRecipes';
const route = useRoute();
const { recipes, error, loading, fetchRecipeById } = useRecipes();

onMounted(async () => {
  await fetchRecipeById(route.params.id);

  route.meta.title = recipes.value.title;
  document.title = recipes.value.title;
});
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error: {{ error.message }}</p>
  <div v-if="!loading && !error" class="flex flex-col max-w-[800px] m-auto">
    <h1 class="text-4xl font-semibold">{{ recipes.title }}</h1>
    <div class="flex justify-between mb-3">
      <p>{{ recipes.category }}</p>
      <p>{{ recipes.country }}</p>
    </div>

    <img :src="recipes.image" :alt="recipes.title" />
    <div>
      <div class="flex flex-wrap gap-2 my-3">
        <p
          v-for="tag in recipes.tags"
          :key="tag"
          class="bg-gray-200 font-semibold text-gray-600 text-xs p-2 rounded"
        >
          {{ tag }}
        </p>
      </div>

      <div class="my-5">
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <div v-for="ingredient in recipes.ingredients">
          <div class="grid grid-cols-2 py-2">
            <p>{{ ingredient.name }}</p>
            <p>{{ ingredient.measure }}</p>
          </div>
          <div class="bg-gray-300 h-[1px] w-full"></div>
        </div>
      </div>

      <div class="my-5">
        <h2 class="text-2xl font-semibold mb-3">Instructions</h2>
        <p>{{ recipes.instructions }}</p>
      </div>
    </div>
  </div>
</template>
