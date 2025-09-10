import api from './axios';

const normalizeCategory = (category) => {
  return {
    name: category?.strCategory,
  };
};

export const getCategories = async () => {
  const res = await api.get('list.php?c=list');
  return res.data.meals.map(normalizeCategory);
};

export const getTopCategories = async () => {
  return [
    {
      name: 'Dessert',
      image: 'dessert.jpg',
    },
    {
      name: 'Pasta',
      image: 'pasta.jpg',
    },
    {
      name: 'Seafood',
      image: 'seafood.jpg',
    },
    {
      name: 'Vegan',
      image: 'vegan.jpg',
    },
  ];
};
