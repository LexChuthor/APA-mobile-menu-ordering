const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/books"
router.route("/")
  .get(orderController.findAllOrder)
  .post(orderController.createOrder);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(orderController.findOrderById)
  .put(orderController.updateOrder)
  .delete(orderController.removeOrder);

module.exports = router;
