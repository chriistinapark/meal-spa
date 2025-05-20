import { API_URL, API_KEY } from './config';

export async function getAllCategories() {
  const r = await fetch(`${API_URL}${API_KEY}/categories.php`);
  const data = await r.json();
  return data.categories;
}

export async function getMealsByCategory(cat) {
  const r = await fetch(`${API_URL}${API_KEY}/filter.php?c=${cat}`);
  const data = await r.json();
  return data.meals;
}

export async function getMealById(id) {
  const r = await fetch(`${API_URL}${API_KEY}/lookup.php?i=${id}`);
  const data = await r.json();
  return data.meals[0];
}
