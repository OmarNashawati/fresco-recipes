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

  const fetchTopCounties = () => {
    loading.value = true;

    try {
      const data = [
        {
          name: 'italy',
          adjective: 'italian',
          image: 'italy.png',
          recipesCount: 21,
        },
        {
          name: 'Mexico',
          adjective: 'Mexican',
          image: 'mexico.png',
          recipesCount: 6,
        },
        {
          name: 'Japan',
          adjective: 'Japanese',
          image: 'japan.png',
          recipesCount: 9,
        },
        {
          name: 'United Kingdom',
          adjective: 'British',
          image: 'uk.png',
          recipesCount: 57,
        },
      ];
      countries.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { countries, loading, error, fetchCountries, fetchTopCounties };
};
