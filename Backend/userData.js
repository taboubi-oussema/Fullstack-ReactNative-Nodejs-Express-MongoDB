const mongoose = require("mongoose");

const userData = new mongoose.Schema(
  {
    email: String,
    mobile: String,
    password: String,
  },
  {
    collation: "UserInfo",
  }
);

mongoose.model("UserInfo", userData);
