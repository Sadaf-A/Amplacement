const MyPostService = require("../services/MyPostService");
exports.getmyPosts = async (req, res) => {
  const jobPosts = await MyPostService.getAllPosts(req.session.userId);
  console.log(jobPosts);
  res.render("jobPosts", { jobPosts, userName: "jon doe",  });
};
