const express = require("express");
const router = express.Router();
const jobApplicationController = require("../controllers/jobApplicationController");

router.get("/application", jobApplicationController.getJobApplicationForm);

router.post("/application", jobApplicationController.saveApplication);

module.exports = router;
