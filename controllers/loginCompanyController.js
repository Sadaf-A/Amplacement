const formidable = require("formidable");
const LoginService = require("../services/LoginService");

exports.getLoginCompanyForm = (req, res) => {
  res.render("loginCompany.ejs");
};

exports.loginCompany = async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error parsing form data" });
      }

      const { name, password } = fields;

      console.log(name, password);

      const sessionId = await LoginService.loginCompany(name[0], password[0]);
;
      if (sessionId) {
        req.session.companyId = sessionId;
      }

      res.redirect(`/company/profile?name=${name}`);
    });
  } catch (err) {
    res.status(400).json({ error: `Registration failed: ${error.message}` });
  }
};
