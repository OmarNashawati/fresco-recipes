import api from './axios';

const normalizeIngredient = (ingredient) => {
  return {
    id: ingredient?.idIngredient ?? null,
    name: ingredient?.strIngredient ?? 'Unknown',
    description: ingredient?.strDescription ?? '',
    type: ingredient?.strType ?? '',
    image: `https://www.themealdb.com/images/ingredients/${ingredient?.strIngredient.replaceAll(' ', '_')}-small.png`,
  };
};

export const getIngredients = async () => {
  const res = await api.get('list.php?i=list');
  return res.data.meals.map(normalizeIngredient);
};
