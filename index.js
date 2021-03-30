var express = require("express");
var app = express();
var port = 3000;

var cambien1 = require("./cambien1");
var cambien2 = require("./cambien2");
var cambien3 = require("./cambien3");

app.use("/cambien1.html", cambien1);
app.use("/cambien2.html", cambien2);
app.use("/cambien3.html", cambien3);

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/" + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
