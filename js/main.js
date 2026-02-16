import { getCategories, getProductsByCategory, getAllProducts } from "./api.js";
import { renderCategories, renderProducts } from "./ui.js";
import { updateCartCount } from "./cart.js";

// Loader
const loader = document.getElementById("global-loader");

const showLoader = () => {
  loader?.classList.remove("hidden");
};

const hideLoader = () => {
  loader?.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    showLoader();

    updateCartCount();

    const [categories, products] = await Promise.all([
      getCategories(),
      getAllProducts(),
    ]);

    renderCategories(categories, loadProducts, loadAllProducts);
    renderProducts(products);

    const trending = [...products]
      .sort((a, b) => b?.rating?.rate - a?.rating?.rate)
      .slice(0, 4);

    renderTrending(trending);

    initNavigation();
    showHome();
  } catch (error) {
    console.error("App Initialization Failed:", error.message);
  } finally {
    hideLoader();
  }
});

// Products Loading
const loadProducts = async (category) => {
  try {
    showLoader();

    const products = await getProductsByCategory(category);
    renderProducts(products);
    showProducts();
  } catch (error) {
    console.error("Failed to load category products:", error.message);
  } finally {
    hideLoader();
  }
};

const loadAllProducts = async () => {
  try {
    showLoader();

    const products = await getAllProducts();
    renderProducts(products);
    showProducts();
  } catch (error) {
    console.error("Failed to load all products:", error.message);
  } finally {
    hideLoader();
  }
};

//  Trending Section
const renderTrending = (products = []) => {
  const container = document.getElementById("trending-container");
  if (!container) return;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const { title, price, image, category, rating = {} } = product;

    const { rate = 0, count = 0 } = rating;

    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-xl";

    card.innerHTML = `
      <figure class="p-4 bg-slate-200">
        <img src="${image}" class="h-40 object-contain" alt="${title}" />
      </figure>
      <div class="card-body">
        <div class="flex justify-between">
          <span class="text-blue-800">${category}</span>
          <div class="flex gap-1">
            <span>${rate}</span>
            <span>(${count})</span>
          </div>
        </div>
        <h2 class="card-title text-sm">
          ${title?.slice(0, 40) || "No Title"}...
        </h2>
        <p class="font-bold">$${price}</p>
      </div>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
};

//  Navigation
const showHome = () => {
  toggleSection({
    home: true,
    features: true,
    trending: true,
    products: false,
  });

  setActiveNav("nav-home");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showProducts = () => {
  toggleSection({
    home: false,
    features: false,
    trending: false,
    products: true,
  });

  setActiveNav("nav-products");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleSection = ({ home, features, trending, products }) => {
  const sections = {
    "home-section": home,
    "features-section": features,
    "trending-section": trending,
    "products-section": products,
  };

  Object.entries(sections).forEach(([id, show]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle("hidden", !show);
  });
};

const setActiveNav = (activeId) => {
  document
    .querySelectorAll(".menu a")
    .forEach((link) => link.classList.remove("font-bold", "text-primary"));

  const active = document.getElementById(activeId);
  active?.classList.add("font-bold", "text-primary");
};

const initNavigation = () => {
  const navMap = {
    "nav-home": showHome,
    "nav-products": showProducts,
    "mobile-nav-home": showHome,
    "mobile-nav-products": showProducts,
  };

  Object.entries(navMap).forEach(([id, handler]) => {
    const el = document.getElementById(id);
    el?.addEventListener("click", handler);
  });
};
