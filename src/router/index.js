import { createRouter, createWebHistory } from 'vue-router';
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
        meta: {
          title: 'Fresco Recipes | Simple, Fresh, Delicious',
        },
      },
      {
        path: '/recipes/:filterType?/:filterValue?',
        name: 'recipes',
        component: Recipes,
        meta: {
          title: 'Fresco Recipes | Recipes',
        },
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
        meta: {
          title: 'Fresco Recipes | Ingredients',
        },
      },
      {
        path: '/recipe/:id?',
        name: 'recipe-details',
        component: RecipeDetails,
        meta: {},
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if a title is defined in the route's meta
  if (to.meta.title) {
    if (typeof to.meta.title === 'function') {
      document.title = to.meta.title(to); // Call the function for dynamic titles
    } else {
      document.title = to.meta.title; // Use the static title
    }
  } else {
    document.title = 'Fresco Recipes'; // Fallback to default title
  }
  next(); // Continue the navigation
});

export default router;
