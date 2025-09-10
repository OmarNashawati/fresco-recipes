import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRecipes } from '@/composables/useRecipes';

export const useFilterStore = defineStore('filter', () => {
  const {
    recipes,
    error,
    loading,
    fetchRecipes,
    fetchRecipeByLetter,
    fetchRecipeByCategory,
    fetchRecipeByCountry,
    fetchRecipesByIngredient,
  } = useRecipes();

  const filteredRecipes = computed(() => {
    return recipes;
  });

  function search(q) {
    fetchRecipes(q);
  }

  function filterByLetter(letter) {
    fetchRecipeByLetter(letter);
  }

  function filterByCategory(category) {
    fetchRecipeByCategory(category);
  }

  function filterByCountry(country) {
    fetchRecipeByCountry(country);
  }

  function filterByIngredient(ingredient) {
    fetchRecipesByIngredient(ingredient);
  }

  return {
    filteredRecipes,
    error,
    loading,
    search,
    filterByLetter,
    filterByCategory,
    filterByCountry,
    filterByIngredient,
  };
});
