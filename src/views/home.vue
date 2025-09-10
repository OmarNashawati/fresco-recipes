<script setup>
import HeroRecipe from '@/components/HeroRecipe.vue';
import RecipesList from '@/components/RecipesList.vue';
import TopCountries from '@/components/TopCountries.vue';
import { onMounted, ref } from 'vue';
import { useRecipes } from '@/composables/useRecipes';

const { recipes, loading, error, fetchRandomRecipes } = useRecipes();

onMounted(async () => {
  // fetchRandomRecipes(6);
});
</script>

<template>
  <!-- <HeroRecipe /> -->

  <section class="mt-10">
    <h1 class="font-bold text-orange-500 text-3xl">What To Cook ?</h1>
    <RecipesList :loading="loading" :error="error" :recipes="recipes" />
  </section>

  <section>
    <div>
      <h1 class="font-bold text-orange-500 text-3xl">Top Countries</h1>
      <TopCountries />
    </div>
  </section>
</template>
