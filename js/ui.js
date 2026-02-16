import { addToCart } from "./cart.js";

export function renderCategories(categories, loadProducts, loadAll) {
  const container = document.getElementById("category-container");
  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-primary";
  allBtn.innerText = "All";

  allBtn.addEventListener("click", () => {
    resetActive();
    allBtn.classList.remove("btn-outline");
    allBtn.classList.add("btn-primary");
    loadAll();
  });

  container.appendChild(allBtn);

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline";
    btn.innerText = cat;

    btn.addEventListener("click", () => {
      resetActive();
      btn.classList.remove("btn-outline");
      btn.classList.add("btn-primary");
      loadProducts(cat);
    });

    container.appendChild(btn);
  });
}

function resetActive() {
  document.querySelectorAll("#category-container .btn").forEach((b) => {
    b.classList.remove("btn-primary");
    b.classList.add("btn-outline");
  });
}

export function renderProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-xl";

    card.innerHTML = `
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
    `;

    card.querySelector(".add-btn").onclick = () => addToCart(product);
    card.querySelector(".details-btn").onclick = () => openModal(product);

    container.appendChild(card);
  });
}

function openModal(product) {
  const modal = document.getElementById("product-modal");
  document.getElementById("modal-title").innerText = product.title;
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-description").innerText = product.description;
  document.getElementById("modal-price").innerText = "$" + product.price;

  document.getElementById("modal-add-btn").onclick = () => addToCart(product);
  modal.showModal();
}
