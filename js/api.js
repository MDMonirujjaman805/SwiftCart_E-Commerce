const BASE_URL = "https://fakestoreapi.com/products";

export const getCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/categories`);

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getCategories:", error.message);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/category/${category}`);

    if (!res.ok) {
      throw new Error("Failed to fetch products by category");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getProductsByCategory:", error.message);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getAllProducts:", error.message);
    throw error;
  }
};
