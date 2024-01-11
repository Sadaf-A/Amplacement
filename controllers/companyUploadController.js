const formidable = require("formidable");
const UploadService = require("../services/UploadService");

exports.getCompanyUploadForm = (req, res) => {
  res.render("uploadJob", { name: "john doe"});
};

exports.uploadJob = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error parsing form data" });
      }

      const { title, description, salary } = fields;

      const companyId = req.session.companyId;

      console.log(companyId);
      
      await UploadService.uploadJob(
        companyId,
        title[0],
        description[0],
        salary[0]
      );

      res.send("your job post was uploaded!");
    });
  } catch (err) {
    res.status(400).json({ error: `upload failed: ${error.message}` });
  }
};
