const express = require("express");
const router = express.Router();
const companyUploadController = require("../controllers/companyUploadController");

router.get("/company/upload", companyUploadController.getCompanyUploadForm);

router.post("/company/upload", companyUploadController.uploadJob);

module.exports = router;
