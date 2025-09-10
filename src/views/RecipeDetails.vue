<script setup>
import { onMounted } from 'vue';
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
    <div class="flex flex-col gap-2 my-5">
      <h1 class="text-4xl font-bold">{{ recipes.title }}</h1>
      <div class="flex gap-3">
        <p>{{ recipes.country }}</p>
        <span>•</span>
        <p>{{ recipes.category }}</p>
      </div>

      <div>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="tag in recipes.tags"
            :key="tag"
            class="bg-gray-200 font-semibold text-gray-600 text-xs py-1 px-2 rounded"
          >
            {{ tag }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-5">
      <img class="w-full md:w-[50%] h-auto md:h-100" :src="recipes.image" :alt="recipes.title" />

      <div class="w-full md:w-[50%]">
        <h2 class="text-2xl font-semibold">Ingredients</h2>
        <div v-for="(ingredient, index) in recipes.ingredients" :key="index">
          <div class="text-s grid grid-cols-2 py-1">
            <p class="font-semibold">{{ ingredient.name }}</p>
            <p class="text-end">{{ ingredient.measure }}</p>
          </div>
          <div
            v-if="index !== recipes.ingredients.length - 1"
            class="bg-gray-300 h-[1px] w-full"
          ></div>
        </div>
      </div>
    </div>

    <div>
      <div class="my-5">
        <h2 class="text-2xl font-semibold mb-3">Instructions</h2>
        <p v-for="(item, index) in recipes.instructions" :key="index">
          <span v-if="item"
            ><strong class="text-orange-500">{{ index + 1 }}.</strong> {{ item }}</span
          >
          <span v-else></span>
        </p>
      </div>
    </div>
  </div>
</template>
