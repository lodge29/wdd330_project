import { getLocalStorage, setLocalStorage } from "./utils.mjs";

import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// :::WEEK 1::: add 'product' to array for cart output
function addProductToCart(product) {
  let cartItems = getLocalStorage("so-cart") || [];

  // if NOT array, make it so!
  /*
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }*/

  // push cart item to array
  cartItems.push(product);

  // store array in local storage for output
  setLocalStorage("so-cart", cartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
