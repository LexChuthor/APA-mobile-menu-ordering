const router = require("express").Router();
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const orderRoutes = require("./order");

const loginController = require("../../controllers/loginController");

// Book routes
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/order", orderRoutes);

router
  .route("/signup")
  .post(loginController.signUp);

// Matches with "/api/signin"
router
  .route("/signin") 
  .post(loginController.signIn);

// Matches with "/api/verify"
router
  .route("/api/verify")
  .post(loginController.verify);

// Matches with "/api/logout"
router
  .route("/api/logout")
  .post(loginController.logout);

// Matches with "/api/addEvent"


module.exports = router;
