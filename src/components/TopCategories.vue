<script setup>
import { useCategories } from '@/composables/useCategories';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
const { categories, error, loading, fetchTopCategories } = useCategories();

const categoryImages = import.meta.glob('../assets/categories/*.jpg', { eager: true });

function getCategoryImage(categoryImage) {
  return categoryImages[`../assets/categories/${categoryImage}`]?.default;
}

onMounted(() => {
  fetchTopCategories();
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div
      v-for="category in categories"
      @click="
        router.push({
          name: 'recipes',
          params: { filterType: 'categories', filterValue: category.name },
        })
      "
      :key="category.name"
      class="relative rounded overflow-hidden h-[240px]"
    >
      <div>
        <img :src="getCategoryImage(category.image)" alt="" />
      </div>
      <div
        class="flex items-center justify-center absolute w-full h-full top-0 py-3 transparent-bg-ii cursor-pointer"
      >
        <p class="text-center font-bold text-4xl text-white">{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>
