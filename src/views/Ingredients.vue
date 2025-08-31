<script setup>
import { onMounted } from 'vue';
import { useIngredients } from '@/composables/useIngredients';
import { RouterLink } from 'vue-router';

const { error, loading, ingredients, fetchIngredients } = useIngredients();

onMounted(() => {
  fetchIngredients();
});
</script>

<template>
  <h1 class="font-bold text-orange-500 text-3xl">Ingredients</h1>

  <h1></h1>
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error: {{ error.message }}</p>
  <div v-if="!error && !loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    <RouterLink
      to="/"
      v-for="ingredient in ingredients"
      class="flex items-center gap-4 px-2 py-4 shadow rounded bg-white text-center"
    >
      <div>
        <img class="w-10" :src="ingredient.image" alt="ingredient" loading="lazy" />
      </div>
      <p class="font-semibold text-xl">
        {{ ingredient.name }}
      </p>
    </RouterLink>
  </div>
</template>
