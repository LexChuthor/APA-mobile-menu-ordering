const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/books"
router.route("/")
  .get(orderController.findAllProducts)
  .post(orderController.createProduct);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(orderController.findProductById)
  .put(orderController.updateProduct)
  .delete(orderController.removeProduct);

module.exports = router;
