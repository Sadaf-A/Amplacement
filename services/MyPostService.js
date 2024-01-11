const jobPostUpload = require("../models/uploadJobPost");

exports.getAllPosts = async () => {
  try {
    const userPosts = await jobPostUpload.find({});
    console.log(userPosts);
    return userPosts;
  } catch (err) {
    console.error(err);
  }
};
