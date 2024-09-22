const express = require("express");
const app = express();

app.post("/signup", function (req, res) {});
app.post("/login", function (req, res) {});
app.post("/purchase", function (req, res) {});
app.post("/allcourses", function (req, res) {});
app.post("/purchased", function (req, res) {});
app.listen(3000, function () {
  "server is running at port 3000";
});
