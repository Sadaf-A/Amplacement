const express = require("express");
const router = express.Router();
const userRegistrationController = require("../controllers/userRegistrationController");

router.get("/student/register", userRegistrationController.getRegistrationForm);

router.post("/student/register", userRegistrationController.registerUser);

module.exports = router;
