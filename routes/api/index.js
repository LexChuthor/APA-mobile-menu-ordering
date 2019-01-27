const router = require("express").Router();
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const orderRoutes = require("./order");
const signupRoutes = require("./signup");
const signinRoutes = require("./signin");

const loginController = require("../../controllers/loginController");

// Book routes
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/order", orderRoutes);
router.use("/signup", signupRoutes);
router.use("/signin", signinRoutes);


router
  .route("/verify")
  .post(loginController.verify);

// Matches with "/api/logout"
router
  .route("/logout")
  .post(loginController.logout);

// Matches with "/api/addEvent"


module.exports = router;
