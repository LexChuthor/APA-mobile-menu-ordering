import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/order");
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Deletes the book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/order/" + id);
  },
  // Saves a book to the database
  saveProduct: function(productData) {
    return axios.post("/api/order", productData);
  }
};
