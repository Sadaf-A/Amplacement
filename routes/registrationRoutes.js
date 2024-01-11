const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");

router.get("/register", registrationController.getPreRegistrationForm);

router.get("/register/redirect", registrationController.redirect);

module.exports = router;