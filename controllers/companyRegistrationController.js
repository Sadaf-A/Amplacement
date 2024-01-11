const formidable = require("formidable");
const registrationService = require("../services/RegistrationService");

exports.getCompanyRegistrationForm = (req, res) => {
  res.render("registerCompany.ejs");
};

exports.registerCompany = (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error parsing form data" });
      }

      const { name, industry, location, password } = fields;

      console.log(fields);

      registrationService.registerCompany(
        name[0],
        industry[0],
        location[0],
        password[0]
      );

      res.redirect("/login");
    });
  } catch (err) {
    res.status(400).json({ error: `Registration failed: ${error.message}` });
  }
};
