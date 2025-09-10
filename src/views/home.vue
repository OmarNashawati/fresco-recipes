<script setup>
import HeroRecipe from '@/components/HeroRecipe.vue';
import RecipesList from '@/components/RecipesList.vue';
import TopCountries from '@/components/TopCountries.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import TopCategories from '@/components/TopCategories.vue';
import { onMounted } from 'vue';
import { useRecipes } from '@/composables/useRecipes';

const { recipes, loading, error, fetchRandomRecipes } = useRecipes();

onMounted(async () => {
  fetchRandomRecipes(6);
});
</script>

<template>
  <section class="min-h-[300px]">
    <HeroRecipe />
  </section>

  <section class="min-h-[300px] mt-10">
    <SectionTitle>What To Cook ?</SectionTitle>
    <RecipesList :loading="loading" :error="error" :recipes="recipes" />
  </section>

  <section class="min-h-[300px] mt-10">
    <SectionTitle>Top Countries</SectionTitle>
    <TopCountries />
  </section>

  <section class="min-h-[300px] mt-10">
    <SectionTitle>Top Categories</SectionTitle>
    <TopCategories />
  </section>
</template>
