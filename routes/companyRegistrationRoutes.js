const express = require("express");
const router = express.Router();
const companyRegistrationController = require("../controllers/companyRegistrationController");

router.get("/company/register", companyRegistrationController.getCompanyRegistrationForm);

router.post("/company/register", companyRegistrationController.registerCompany);

module.exports = router;
