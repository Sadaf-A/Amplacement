const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  cover_letter: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
