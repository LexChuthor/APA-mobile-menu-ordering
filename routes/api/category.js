const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/category"
router.route("/")
  .get(orderController.findAllCategory)
  .post(orderController.createCategory);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(orderController.findCategoryById)
  .delete(orderController.removeCategory);

router
  .route("/:name")
  .put(orderController.updateCategoryWithProduct);
module.exports = router;
