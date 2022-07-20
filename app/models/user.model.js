const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    branch: String,
    socialGroup: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
