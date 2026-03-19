/*
 i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            // Find and return product by ID
                          }
                          
                          export function getAllProducts() {
                            // Return all products
                          }
                          
                          export function getProductsByCategory(category) {
                            // Filter products by category
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            // Return true/false
                          }
                          
                          export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
                          }

*/

// Product database (simulated)
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }
];

export function getProductById(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(category) {
  return products.filter(function (p) {
    return p.category === category;
  });
}

export function searchProducts(query) {
  return products.filter(function (p) {
    return p.name.toLowerCase().includes(query.toLowerCase());
  });
}

export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return false;
  return product.stock >= quantity;
}

export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) {
    product.stock = product.stock - quantity;
  }
}
