const User = require("../models/UserModel");
const Comp = require("../models/CompanyModel");
exports.loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user || user.password != password) {
      console.log("invalid creds");
    }
    return user._id;
  } catch (err) {
    console.error(err);
  }
};

exports.loginCompany = async (name, password) => {
  try {
    console.log(name, ":", password)
    const company = await Comp.findOne({ name });
    console.log(company);
    if (!company) {
      console.log("invalid creds");
    }
    return company._id;
  } catch (err) {
    console.error(err);
  }
};
