import api from './axios';

function normalizeRecipe(recipe) {
  const ingredients = () => {
    const x = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        x.push({
          name: recipe[`strIngredient${i}`],
          measure: recipe[`strMeasure${i}`],
        });
      }
    }
    return x;
  };

  return {
    id: recipe?.idMeal ?? null,
    title: recipe?.strMeal ?? 'Unknown',
    category: recipe?.strCategory ?? '',
    country: recipe?.strArea ?? '',
    instructions: recipe?.strInstructions,
    tags: recipe?.strTags?.split(',') ?? [],
    image: recipe?.strMealThumb ?? 'https://placehold.co/600x400/orange/white?text=Recipe\nImage',
    youtube: recipe?.strYoutube ?? 'Not Provided',
    source: recipe?.strSource ?? 'Not Provided',
    ingredients: ingredients(),
  };
}

export const getRecipes = async (query) => {
  const res = await api.get(`search.php?s=${query || ''}`);
  return res.data.meals.map(normalizeRecipe);
};

export const getRecipesByCategory = async (category) => {
  const res = await api.get(`filter.php?c=${category}`);
  return res.data.meals.map(normalizeRecipe);
};

export const getRecipesByCountry = async (country) => {
  const res = await api.get(`filter.php?a=${country}`);
  return res.data.meals.map(normalizeRecipe);
};

export const getRecipeByID = async (id) => {
  const res = await api.get(`lookup.php?i=${id}`);
  return normalizeRecipe(res.data.meals[0]);
};

export const getRendomRecipes = async (num) => {
  const recipes = [];
  for (let i = 0; i < num; i++) {
    const res = await api.get('random.php');
    recipes.push(res.data.meals[0]);
  }
  return recipes.map(normalizeRecipe);
};

export const getRecipesByLetter = async (letter) => {
  const res = await api.get(`search.php?f=${letter}`);
  return res.data.meals.map(normalizeRecipe);
};
