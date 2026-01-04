const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

console.log(__dirname);

app.get("/", function (req, res) {
  res.render("index");
});

// Learning how to create dynamic route
app.get("/profile/:username", function (req, res) {
  res.send(req.params.username);
});

app.get("/profile/:username/:age", function (req, res) {
  res.send(req.params);
});

app.listen(3000, function () {
  console.log("It's running");
});
