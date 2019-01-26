const router = require("express").Router();
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const orderRoutes = require("./order");

// Book routes
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/order", orderRoutes);

module.exports = router;
