const UploadResume = require("../models/UploadResumeModel");
const UploadJob = require("../models/uploadJobPost");

exports.uploadResume = async (userId, objectKey) => {
  try {
    const newResume = new UploadResume({
      userId,
      objectKey,
    });

    await newResume.save();
    console.log("resume saved successfully");
  } catch (err) {
    console.error(err);
  }
};

exports.uploadJob = async (companyId, title, description, salary) => {
  try {
    const newJobPost = new UploadJob({
      companyId, 
      title, 
      description, 
      salary
    })

    await newJobPost.save();
    console.log("job post added successfully");
  } catch (err) {
    console.error(err);
  }
};
