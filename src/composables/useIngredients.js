import { ref } from 'vue';
import { getIngredients } from '@/api/ingredientsService';

export const useIngredients = () => {
  const ingredients = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchIngredients = async () => {
    loading.value = true;

    try {
      const data = await getIngredients();
      ingredients.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { ingredients, error, loading, fetchIngredients };
};
