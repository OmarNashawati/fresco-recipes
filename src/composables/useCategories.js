import { getCategories, getTopCategories } from '@/api/categoreyService';
import { onMounted, ref } from 'vue';

export const useCategories = () => {
  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchCategories = async () => {
    loading.value = true;

    try {
      const data = await getCategories();
      categories.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const fetchTopCategories = async () => {
    loading.value = true;

    try {
      const data = await getTopCategories();
      categories.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { categories, error, loading, fetchTopCategories, fetchCategories };
};
