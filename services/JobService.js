const JobModel = require("../models/uploadJobPost");

exports.getJobData = async (jobId) => {
  try {
    const jobData = await JobModel.find({ _id: jobId});
    return jobData[0];
  } catch (err) {
    console.error(err);
  }
};
