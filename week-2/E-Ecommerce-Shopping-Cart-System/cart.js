/*
 ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                          }

*/

import { getProductById, checkStock } from "./product.js";

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) {
    return "Product not found";
  }

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].product.id === productId) {
      cartItems[i].quantity += quantity;
      return "Cart updated successfully";
    }
  }

  cartItems.push({
    product: product,
    quantity: quantity
  });

  return "Product added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(function (item) {
    return item.product.id !== productId;
  });
  return "Product removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].product.id === productId) {
      cartItems[i].quantity = newQuantity;
      return "Quantity updated";
    }
  }
  return "Product not found in cart";
}

export function getCartItems() {
  return cartItems;
}

export function getCartTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].product.price * cartItems[i].quantity;
  }
  return total;
}

export function clearCart() {
  cartItems = [];
}
