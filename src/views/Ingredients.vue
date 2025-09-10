<script setup>
import { onMounted } from 'vue';
import { useIngredients } from '@/composables/useIngredients';
import { RouterLink } from 'vue-router';
import SectionTitle from '@/components/SectionTitle.vue';

const { error, loading, ingredients, fetchIngredients } = useIngredients();

onMounted(() => {
  fetchIngredients();
});
</script>

<template>
  <SectionTitle>Ingredients</SectionTitle>
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error: {{ error.message }}</p>
  <div v-if="!error && !loading" class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
    <RouterLink
      v-for="ingredient in ingredients"
      :to="{ name: 'recipes', params: { filterType: 'ingredients', filterValue: ingredient.name } }"
      class="flex flex-col items-center gap-2 px-2 py-2 shadow rounded border border-transparent hover:border-orange-500 bg-white text-center hover:bg-orange-50"
    >
      <div>
        <img class="w-20" :src="ingredient.image" alt="ingredient" loading="lazy" />
      </div>
      <p class="font-semibold text-lg">
        {{ ingredient.name }}
      </p>
    </RouterLink>
  </div>
</template>
