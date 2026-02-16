const BASE_URL = "https://fakestoreapi.com/products";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  return await res.json();
}

export async function getProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/category/${category}`);
  return await res.json();
}

export async function getAllProducts() {
  const res = await fetch(BASE_URL);
  return await res.json();
}
