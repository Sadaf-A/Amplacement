const AppplicationService = require("../services/ApplicationService");

exports.getCompanyApplications = async (req, res) => {
  const jobApplications = await AppplicationService.getApplicationsFromCompanyId(req.session.companyId);
  console.log(jobApplications);
  res.render("companyApplications", { jobApplications, userName: 'john Doe'});
};
