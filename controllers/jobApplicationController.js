const formidable = require("formidable");
const JobService = require("../services/JobService");
const ApplicationService = require("../services/ApplicationService");

exports.getJobApplicationForm = async (req, res) => {
  const jobId = req.query.jobId;
  const jobData = await JobService.getJobData(jobId);
  const companyId = await ApplicationService.getCompanyIdFromJobId(jobId);
  res.render("application", { jobTitle: jobData.title, companyId});
};

exports.saveApplication = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error parsing form data" });
      }

      const companyId = req.query.companyId;

      console.log(companyId);

      console.log()

      const { cover_letter, email } = fields;

      await ApplicationService.saveApplication(
        cover_letter[0],
        companyId,
        email[0]
      );

      res.send("your application was saved!");
    });
  } catch (err) {
    res.status(400).json({ error: `upload failed: ${error.message}` });
  }
};
