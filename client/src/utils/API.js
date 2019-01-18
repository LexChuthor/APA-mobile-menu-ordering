import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/product");
  },
  // Gets the book with the given id
  getProductbyId: function(id) {
    return axios.get("/api/product/" + id);
  },
  // Deletes the book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/product/" + id);
  },
  // Saves a book to the database
  saveProduct: function(productData) {
    return axios.post("/api/product", productData);
  },
  getCategories: function() {
    return axios.get("/api/category");
  },
  getCategorybyId: function(id) {
    return axios.get("/api/category/" + id);
  },
  deleteCategory: function(id) {
    return axios.delete("api/category/" + id);
  },
  saveCategory: function(categoryData){
    return axios.post("/api/category", categoryData);
  },
  getOrders: function() {
    return axios.get("/api/order");
  },
  // Gets the book with the given id
  getOrderbyId: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Deletes the book with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/order/" + id);
  },
  // Saves a book to the database
  saveOrder: function(orderData) {
    return axios.post("/api/order", orderData);
  }
};
