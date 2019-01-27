const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router
    .route("/")
    .post(loginController.signIn);


module.exports = router;