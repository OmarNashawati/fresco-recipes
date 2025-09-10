import api from './axios';
import { getRecipesByCountry } from './recipesService';

const normalize = (c) => {
  return {
    name: c?.strArea,
  };
};

export const getCountries = async () => {
  const res = await api.get('list.php?a=list');
  return res.data.meals.map(normalize);
};

// async function normalizer(countryItem) {
//   const recipesByCountry = await getRecipesByCountry(countryItem.name);
//   return {
//     name: countryItem.name,
//     image: `${countryItem.name}.png`,
//     recipeCount: recipesByCountry.length,
//   };
// }

// export const getDetailedCountries = async () => {
//   const countries = await getCountries();
//   return Promise.all(countries.map(normalizer));
// };
