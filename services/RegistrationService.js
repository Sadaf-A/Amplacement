const User = require("../models/UserModel");
const Comp = require("../models/CompanyModel");

exports.registerUser = async (username, email, number, password) => {
  try {
    const newUser = new User({
      username,
      email,
      number,
      password,
    });

    await newUser.save();
    console.log("user saved successfully");
  } catch (err) {
    console.error(err);
  }
};

exports.registerCompany = async (name, industry, location, password) => {
  try {
    console.log("reached")
    const newCompany = new Comp({
      name,
      industry,
      location,
      password,
    });
    console.log("success")
    await newCompany.save();
    console.log("company registered successfully");
  } catch (err) {
    console.error(err);
  }
};
