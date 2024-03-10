const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minChar: 4,
    maxChar: 200,
  },
  email: {
    type: String,
    required: true,
    maxChar: 255,
    minChar: 6,
  },
  password: {
    type: String,
    Required: true,
    minChar: 8,
    minChar: 1000,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
