<script setup>
import { useCategories } from '@/composables/useCategories';
import { useCountries } from '@/composables/useCountries';
import { useFilterStore } from '@/store/useFilter';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { categories, fetchCategories } = useCategories();
const { countries, fetchCountries } = useCountries();
const { search, filterByLetter, filterByCategory, filterByCountry, filterByIngredient } =
  useFilterStore();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const searchQuery = ref('');
const selectedCategory = ref('');
const selectedCountry = ref('');

const mobile = ref(null);
const mobileFilter = ref(null);
const windowWidth = ref(null);

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 639) {
    mobile.value = true;
    mobileFilter.value = false;
    return;
  }
  mobile.value = false;
  mobileFilter.value = true;
  return;
}

function toggleMobileFilter() {
  mobileFilter.value = !mobileFilter.value;
}

if (route.params.filterType && route.params.filterValue) {
  const { filterType, filterValue } = route.params;

  if (filterType === 'countries') {
    console.log(route.params);
    filterByCountry(filterValue);
  }

  if (filterType === 'ingredients') {
    filterByIngredient(filterValue);
  }

  if (filterType === 'categories') {
    filterByCategory(filterValue);
  }
}

window.addEventListener('resize', checkScreen);
checkScreen();

onMounted(() => {
  fetchCountries();
  fetchCategories();
});
</script>

<template>
  <div class="w-full sm:w-[250px] p-3 shadow">
    <button v-if="mobile" @click="toggleMobileFilter" class="cursor-pointer w-full">
      {{ mobileFilter ? 'Close Filter' : `Filter` }}
    </button>

    <div v-if="mobileFilter" class="flex flex-col gap-5 mt-5">
      <div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Recipe"
          name=""
          id=""
          class="border border-gray-200 rounded p-2 w-full"
          @change="search(searchQuery)"
        />
      </div>

      <div class="flex flex-row sm:flex-col gap-5">
        <div class="flex-1">
          <h2 class="font-semibold mb-2">Filter by Category</h2>
          <select
            @change="filterByCategory(selectedCategory)"
            v-model="selectedCategory"
            name="categories"
            id=""
            class="w-full border border-gray-200 p-2 rounded"
          >
            <option value="">Selecy Category</option>
            <option v-for="category in categories" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="flex-1">
          <h2 class="font-semibold mb-2">Filter by Area</h2>
          <select
            @change="filterByCountry(selectedCountry)"
            v-model="selectedCountry"
            name="countries"
            id=""
            class="w-full border border-gray-200 p-2 rounded"
          >
            <option value="">Selecy Country</option>
            <option v-for="country in countries" :value="country.name">{{ country.name }}</option>
          </select>
        </div>
      </div>

      <div>
        <div class="font-semibold mb-2">
          <h2 class="font-semibold mb-2">Filter by First Letter</h2>
          <div class="grid grid-cols-8 sm:grid-cols-4 gap-3">
            <p
              v-for="letter in letters"
              @click="filterByLetter(letter)"
              class="font-normal cursor-pointer hover:bg-orange-500 hover:text-white rounded hover:text-center"
            >
              {{ letter }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
