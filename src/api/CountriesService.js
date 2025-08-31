import api from './axios';

const normalize = (c) => {
  return {
    name: c?.strArea,
  };
};

export const getCountries = async () => {
  const res = await api.get('list.php?a=list');
  return res.data.meals.map(normalize);
};
