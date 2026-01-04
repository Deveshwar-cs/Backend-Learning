const express = require("express");
const app = express();
// In this i learn about how to create route

app.use(function (req, res, next) {
  console.log("middleware running!");
  next();
});

app.get("/", (req, res) => {
  res.send("Ya it's now working");
});

app.get("/profile", (req, res) => {
  res.send("Ya it's profile route is also working");
});

app.listen(3002, () => {
  console.log("Server run succesfully");
});
