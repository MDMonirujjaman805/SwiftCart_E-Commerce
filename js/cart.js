let cart = [];

try {
  const storedCart = localStorage.getItem("cart");
  cart = storedCart ? JSON.parse(storedCart) : [];
} catch (error) {
  console.error("Failed to parse cart from localStorage:", error.message);
  cart = [];
}

export const addToCart = (product) => {
  try {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  } catch (error) {
    console.error("Error adding to cart:", error.message);
  }
};

export const updateCartCount = () => {
  try {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.innerText = cart.length;
    }
  } catch (error) {
    console.error("Error updating cart count:", error.message);
  }
};

export const getCart = () => {
  try {
    return cart;
  } catch (error) {
    console.error("Error getting cart:", error.message);
    return [];
  }
};
