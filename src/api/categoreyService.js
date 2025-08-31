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
