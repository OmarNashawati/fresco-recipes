<script setup>
import HeroRecipe from '@/components/HeroRecipe.vue';
import RecipesList from '@/components/RecipesList.vue';
import TopCountries from '@/components/TopCountries.vue';
import { onMounted, ref } from 'vue';
import { useRecipes } from '@/composables/useRecipes';
import SectionTitle from '@/components/SectionTitle.vue';

const { recipes, loading, error, fetchRandomRecipes } = useRecipes();

onMounted(async () => {
  fetchRandomRecipes(6);
});
</script>

<template>
  <!-- <HeroRecipe /> -->

  <section class="mt-10">
    <SectionTitle>What To Cook ?</SectionTitle>
    <RecipesList :loading="loading" :error="error" :recipes="recipes" />
  </section>

  <section class="mt-10">
    <div>
      <SectionTitle>Top Countries</SectionTitle>
      <TopCountries />
    </div>
  </section>
</template>
