import { addToCart } from "./cart.js";

// Category Rendering
export const renderCategories = (categories = [], loadProducts, loadAll) => {
  const container = document.getElementById("category-container");
  if (!container) return;

  container.innerHTML = "";

  const createButton = (text, onClick, isPrimary = false) => {
    const btn = document.createElement("button");
    btn.className = `btn ${isPrimary ? "btn-primary" : "btn-outline"}`;
    btn.textContent = text;

    btn.addEventListener("click", () => {
      resetActive();
      btn.classList.remove("btn-outline");
      btn.classList.add("btn-primary");
      onClick();
    });

    return btn;
  };

  // All button
  container.appendChild(createButton("All", loadAll, true));

  // Category buttons
  categories.forEach((category) => {
    container.appendChild(createButton(category, () => loadProducts(category)));
  });
};

const resetActive = () => {
  document.querySelectorAll("#category-container .btn").forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });
};

// Product Rendering
export const renderProducts = (products = []) => {
  const container = document.getElementById("product-container");
  if (!container) return;

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const { title, price, image, category, rating = {}, description } = product;

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

        <div class="flex justify-between items-center">
          <button class="btn btn-sm btn-outline details-btn">Details</button>
          <button class="btn btn-sm btn-primary add-btn">Add To Cart</button>
        </div>
      </div>
    `;

    card
      .querySelector(".add-btn")
      ?.addEventListener("click", () => addToCart(product));

    card
      .querySelector(".details-btn")
      ?.addEventListener("click", () =>
        openModal({ title, image, description, price }),
      );

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
};

// Modal
const openModal = ({ title, image, description, price }) => {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-price").textContent = `${price}`;

  const addBtn = document.getElementById("modal-add-btn");

  if (addBtn) {
    addBtn.onclick = () => {
      addToCart({ title, image, description, price });
    };
  }

  modal.showModal();
};
