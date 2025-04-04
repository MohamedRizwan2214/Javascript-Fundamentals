const productList = document.getElementById("product-list");
const search = document.getElementById("search");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const cartContainer = document.getElementById("cart");
const viewCartBtn = document.getElementById("view-cart");
const closeCartBtn = document.getElementById("close-cart");
// cartContainer.style.display = "none";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

import { products } from "./data.js";

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const element = document.createElement("div");
    element.classList.add("card");
    element.innerHTML = `
         
          <img
            src="${product.image}"
            alt="Card 1"
          />

          <h1>${product.name}</h1>
          <p>Rs. ${product.price} </p>
          <button class="cart-button" onclick="addToCart(${product.id})" >Add To cart</button>
        `;
    productList.appendChild(element);
  });
}

search.addEventListener("click", (e) => {
  console.log("object");
  console.log("Items in cart: ");
  const searchText = document
    .getElementById("search-input")
    .value.toLowerCase();
  //   console.log(searchText);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
  renderProducts(filteredProducts);
});
window.addToCart = function (productId) {
  const product = products.find((p) => p.id === productId);
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
};
// window.getItems = getItems; // ✅ Expose function to global scope
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
            <h4>${item.name} - Rs. ${item.price} x ${item.quantity}</h4>
            <button onclick="increaseQuantity(${item.id})">+</button>
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartItems.appendChild(cartItem);
  });
  totalPrice.innerText = total.toFixed(2);
  cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

  localStorage.setItem("cart", JSON.stringify(cart));
}
window.increaseQuantity = function (id) {
  cart.find((item) => item.id === id).quantity++;
  updateCart();
};

window.decreaseQuantity = function (id) {
  const item = cart.find((item) => item.id === id);
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart = cart.filter((i) => i.id !== id);
  }
  updateCart();
};

window.removeFromCart = function (id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
};
viewCartBtn.addEventListener("click", () =>
  cartContainer.classList.toggle("hidden")
);
closeCartBtn.addEventListener("click", () =>
  cartContainer.classList.add("hidden")
);

const categories = [...new Set(products.map((product) => product.category))];
// console.log(categories)
const categoryContainer = document.getElementById("category");

categories.forEach((category) => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="checkbox" value="${category}" />
        ${category}
    `;
    categoryContainer.appendChild(label);
});
const categoryFilters = document.querySelectorAll("#category input[type='checkbox']");

categoryFilters.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const selectedCategories = Array.from(categoryFilters)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        const filteredProducts = selectedCategories.length
            ? products.filter((product) => selectedCategories.includes(product.category))
            : products;

        renderProducts(filteredProducts);
    });
});
renderProducts(products);
updateCart();