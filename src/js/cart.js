import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

/*
import { getLocalStorage } from "./utils.mjs";

// :::WEEK 1::: added testing of array cartItems
function renderCartContents() {
  // added " || []"
  const cartItems = getLocalStorage("so-cart") || [];

  // test if array
  if (!Array.isArray(cartItems)) {
    //console.error("cartItems is not an array:", cartItems);
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // :::WEEK 2::: check if items exist in cart
  if (cartItems.length > 0) {
    // iterate over array and total each value
    const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
    document.querySelector(".cart-total").textContent =
      `Total: $${total.toFixed(2)}`;
    // removes the class name "hide"
    document.querySelector(".cart-footer").classList.remove("hide");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
*/
