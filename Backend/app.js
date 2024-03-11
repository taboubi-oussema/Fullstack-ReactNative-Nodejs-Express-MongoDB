const express = require("express");
const app = express();

const mongoose = require("mongoose");
app.use(express.json());
const mongooseUrl =
  "mongodb+srv://oussema:admin@cluster0.myj48zm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongooseUrl)
  .then(() => {
    console.log("wiiiw");
  })
  .catch((e) => {
    console.log(e);
  });

require("./userData");

const user = mongoose.model("UserInfo");

app.post("/signin", async (req, res) => {
  const { email, mobile, password } = req.body;

  

  try {
    await user.create({
      email: email,
      mobile,
      password,
    });
    res.send({ status: "ok", data: "user created" });
  } catch (error) {
    res.send({ status: "eroor", data: "user nooooooooooo" });
  }
});

app.listen(5001, () => {
  console.log("fffff");
});
