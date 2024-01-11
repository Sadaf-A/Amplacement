const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.get("/login", loginController.getPreLoginForm);

router.get("/login/redirect", loginController.redirect);

module.exports = router;