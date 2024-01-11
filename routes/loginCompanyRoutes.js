const express = require("express");
const router = express.Router();
const loginCompanyController = require("../controllers/loginCompanyController");

router.get("/company/login", loginCompanyController.getLoginCompanyForm);

router.post("/company/login", loginCompanyController.loginCompany);

module.exports = router;
