const express = require("express");
const router = express.Router();

router.get("", function (req, res) {
  res.sendFile(__dirname + "/" + "/cambien3.html");
});

module.exports = router;
