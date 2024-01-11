const express = require("express");
const router = express.Router();
const companyProfileController = require("../controllers/companyProfileController");

router.get("/company/profile", companyProfileController.getCompanyProfile);

module.exports = router;
