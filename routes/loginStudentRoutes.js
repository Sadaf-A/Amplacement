const express = require("express");
const router = express.Router();
const loginStudentController = require("../controllers/loginStudentController");

router.get("/student/login", loginStudentController.getLoginStudentForm);

router.post("/student/login", loginStudentController.loginUser);

module.exports = router;
