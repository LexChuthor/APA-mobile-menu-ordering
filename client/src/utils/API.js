import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/orders");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/orders", bookData);
  }
};
