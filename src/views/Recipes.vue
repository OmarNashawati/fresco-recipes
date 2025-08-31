<script setup>
import RecipesList from '@/components/RecipesList.vue';
import Filter from '@/components/Filter.vue';
import { useFilterStore } from '@/store/useFilter';

const { filteredRecipes, error, loading } = useFilterStore();
</script>

<template>
  <div>
    <div class="flex gap-4 py-5">
      <Filter />
      <RecipesList :loading="loading" :error="error" :recipes="filteredRecipes" />
    </div>
  </div>
</template>
