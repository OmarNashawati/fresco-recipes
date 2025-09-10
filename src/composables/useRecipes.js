import {
  getRecipeByID,
  getRecipes,
  getRecipesByCategory,
  getRecipesByCountry,
  getRecipesByLetter,
  getRendomRecipes,
} from '@/api/recipesService';
import { ref } from 'vue';

export function useRecipes() {
  const recipes = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchRecipes = async (q) => {
    loading.value = true;
    try {
      const data = await getRecipes(q);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchRecipeById = async (id) => {
    loading.value = true;
    try {
      const data = await getRecipeByID(id);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchRecipeByCategory = async (category) => {
    loading.value = true;
    try {
      const data = await getRecipesByCategory(category);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchRecipeByCountry = async (country) => {
    loading.value = true;
    try {
      const data = await getRecipesByCountry(country);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchRecipeByLetter = async (letter) => {
    loading.value = true;
    try {
      const data = await getRecipesByLetter(letter);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchRandomRecipes = async (num) => {
    loading.value = true;
    try {
      const data = await getRendomRecipes(num);
      recipes.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    recipes,
    loading,
    error,
    fetchRecipes,
    fetchRecipeById,
    fetchRecipeByCategory,
    fetchRecipeByCountry,
    fetchRecipeByLetter,
    fetchRandomRecipes,
  };
}
