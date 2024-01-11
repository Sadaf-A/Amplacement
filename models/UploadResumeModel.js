const mongoose = require("mongoose");

let uploadResumeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  objectKey: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NewResumeUpload", uploadResumeSchema);
