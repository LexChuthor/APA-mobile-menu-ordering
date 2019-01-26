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
  updateCategoryWithProduct: function(name, categoryData){
    return axios.put("api/category/" + name, categoryData);
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
  updateOrder: function(id, orderData){
    return axios.put("/api/order/" + id, orderData);
  },
  // Saves a book to the database
  saveOrder: function(orderData) {
    return axios.post("/api/order", orderData);
  }, 
  getUser: (query) => {
    return axios.post("/api/signin", query);
  },
    // Perform a user create operation
  createUser: (query) => {
    return axios.post("/api/signup", query);
  },  
  // Perform a check of the user's session key
  checkAuth: function(query) {
    console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },
    // Perform a load of event for use in the calendar
  loadEvents: () => {
    return axios.get("/loadEvents");
  },
  // Perform a create of an event related to a calendar action
  createEvent: (query) => {
    return axios.post("/api/addEvent", query);
  },
  // Perform a date change for existing event 
  chgEvent: (query) => {
    return axios.post("/api/chgEvent", query);
  },
  // Perform a date change for existing event 
  deleteEvent: (query) => {
    return axios.post("/api/deleteEvent", query);
  },
  createCard: (query) => {
    return axios.post("/api/addCard", query);
  },

  // Deletes a book from the database
  deleteBook: function(id) {
    console.log("Delete of ID requested: " + id);
    return axios.delete("/api/books/" + id);
  },
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("Bookdata = " + JSON.stringify(bookData));
    return axios.post("/api/books", bookData);
  }
};
