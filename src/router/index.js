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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    if (typeof to.meta.title === 'function') {
      document.title = to.meta.title(to);
    } else {
      document.title = to.meta.title;
    }
  } else {
    document.title = 'Fresco Recipes'; // Fallback to default title
  }
  next();
});

export default router;
