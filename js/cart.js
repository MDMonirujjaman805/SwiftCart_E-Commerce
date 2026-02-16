let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(product) {
  cart.push(product);
  updateCartCount();
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

export function getCart() {
  return cart;
}
