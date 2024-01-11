const JobModel = require("../models/uploadJobPost");
const Application = require("../models/ApplicationModel");

exports.getApplication = async (jobId) => {
  try {
    const jobData = await JobModel.find({ _id: jobId});
    return jobData[0];
  } catch (err) {
    console.error(err);
  }
};

exports.getCompanyIdFromJobId = async (jobId) => {
  try { 
    const jobData = await JobModel.findById(jobId);
    return jobData.companyId;
  } catch (err) {
    console.error(err);
  }
}

exports.saveApplication = async (cover_letter, companyId, email) => {
  try {
    const newApplication = new Application({
      cover_letter,
      companyId,
      email
    });

    await newApplication.save();
    console.log("Application saved successfully");
  } catch (err) {
    console.error(err);
  }
};

exports.getApplicationsFromCompanyId = async (companyId) => {
  try {
    const jobs = await Application.find({ companyId });
    console.log(jobs);
    return jobs;
  } catch (err) {
    console.error(err);
  }
}
