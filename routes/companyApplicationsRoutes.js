const express = require("express");
const router = express.Router();
const companyApplicationController = require("../controllers/companyApplicationController");

router.get("/company/applications", companyApplicationController.getCompanyApplications);

module.exports = router;
