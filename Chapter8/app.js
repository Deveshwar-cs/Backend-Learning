const express = require("express");
const userModel = require("./usermodel");
const usermodel = require("./usermodel");

const app = express();

app.get("/", (req, res) => {
  res.send("hey!");
});

app.get("/create", async (req, res) => {
  let createuser = await userModel.create({
    name: "harsh",
    email: "harsh@gmail.com",
    username: "harsh",
  });
  res.send(createuser);
});

app.get("/update", async (req, res) => {
  let updateuser = await userModel.findOneAndUpdate(
    {username: "harsh"},
    {name: "harsh patiyal"},
    {new: true}
  );
  res.send(updateuser);
});

app.get("/read", async (req, res) => {
  let users = await usermodel.find();
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await usermodel.findOneAndDelete({username: "harsh"});
  res.send(users);
});

app.listen(3000);
