import { ref, onMounted } from 'vue';
import { getCountries } from '@/api/CountriesService';

export const useCountries = () => {
  const countries = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchCountries = async () => {
    loading.value = true;

    try {
      const data = await getCountries();
      countries.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchCountries();
  });

  return { countries, loading, error };
};
