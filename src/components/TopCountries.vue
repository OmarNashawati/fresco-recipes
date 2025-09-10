<script setup>
import { useCountries } from '@/composables/useCountries';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { countries, loading, error, fetchTopCounties } = useCountries();
const countryImages = import.meta.glob('../assets/flags/*.png', { eager: true });

function getCountryImage(name) {
  return countryImages[`../assets/flags/${name}`]?.default;
}

onMounted(() => {
  fetchTopCounties();
});
</script>

<template>
  <div class="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 h-[220px]">
    <div
      @click="router.push({ name: 'recipes' })"
      v-for="country in countries"
      class="cursor-pointer relative h-full bg-orange-300 shadow rounded overflow-hidden flex items-end justify-center hover:shadow-xl"
    >
      <img
        class="h-full w-full object-cover"
        :src="getCountryImage(country.image)"
        :alt="country.name"
      />
      <p
        class="flex items-center justify-center absolute h-[20px] top-1 right-1 text-white text-sm rounded p-1 bg-orange-500"
      >
        {{ country.recipesCount }} recipes
      </p>
      <p
        class="w-full py-3 capitalize text-2xl absolute font-bold text-white text-center transparent-bg"
      >
        {{ country.name }}
      </p>
    </div>
  </div>
</template>
