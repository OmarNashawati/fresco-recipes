import { createRouter, createMemoryHistory } from 'vue-router';
import DefaultLayout from '@/components/DefaultLayout.vue';
import Home from '@/views/home.vue';
import Recipes from '@/views/Recipes.vue';
import Ingredients from '@/views/Ingredients.vue';
import RecipeDetails from '@/views/RecipeDetails.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/',
        name: 'recipes',
        component: Recipes,
      },
      {
        path: '/',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/recipe/:id',
        name: 'recipe-details',
        component: RecipeDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
