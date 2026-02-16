import { getCategories, getProductsByCategory, getAllProducts } from "./api.js";
import { renderCategories, renderProducts } from "./ui.js";
import { updateCartCount } from "./cart.js";

document.addEventListener("DOMContentLoaded", async () => {
  updateCartCount();

  const categories = await getCategories();
  const products = await getAllProducts();

  renderCategories(categories, loadProducts, loadAllProducts);
  renderProducts(products);

  const trending = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  renderTrending(trending);

  showHome();

  document.getElementById("nav-home").addEventListener("click", showHome);
  document
    .getElementById("nav-products")
    .addEventListener("click", showProducts);
});

async function loadProducts(category) {
  const products = await getProductsByCategory(category);
  renderProducts(products);
}

async function loadAllProducts() {
  const products = await getAllProducts();
  renderProducts(products);
}

function renderTrending(products) {
  const container = document.getElementById("trending-container");
  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `<div>
      <figure class="p-4 bg-slate-200">
        <img src="${product.image}" class="h-40 object-contain"/>
      </figure>
      <div class="card-body ">
      <div class=" flex justify-between">
      <span class="text-blue-800">${product.category}</span>
      <div class="flex justify-between gap-1"><span>${product.rating.rate}</span> <span>(${product.rating.count})</span></div>
      </div>
        <h2 class="card-title text-sm">
          ${product.title.slice(0, 40)}...
        </h2>
        <p class="font-bold">$${product.price}</p>
        <div class="flex justify-between items-center">
        <button class="btn btn-sm btn-outline details-btn">Details</button>
        <button class=" btn btn-sm btn-primary add-btn " >Add</button>
        </div>
      </div>
      </div>
    `;
  });
}

function showHome() {
  document.getElementById("home-section").classList.remove("hidden");
  document.getElementById("features-section").classList.remove("hidden");
  document.getElementById("trending-section").classList.remove("hidden");

  document.getElementById("products-section").classList.add("hidden");

  window.scrollTo(0, 0);
}

function showProducts() {
  document.getElementById("home-section").classList.add("hidden");
  document.getElementById("features-section").classList.add("hidden");
  document.getElementById("trending-section").classList.add("hidden");

  document.getElementById("products-section").classList.remove("hidden");

  window.scrollTo(0, 0);
}

function setActiveNav(activeId) {
  document
    .querySelectorAll(".menu a")
    .forEach((link) => link.classList.remove("font-bold", "text-primary"));

  document.getElementById(activeId).classList.add("font-bold", "text-primary");
}

document.getElementById("nav-home").addEventListener("click", () => {
  showHome();
  setActiveNav("nav-home");
});

document.getElementById("nav-products").addEventListener("click", () => {
  showProducts();
  setActiveNav("nav-products");
});

document.getElementById("mobile-nav-home").addEventListener("click", () => {
  showHome();
});

document.getElementById("mobile-nav-products").addEventListener("click", () => {
  showProducts();
});
