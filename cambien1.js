const express = require("express");
const router = express.Router();

router.get("", function (req, res) {
  res.sendFile(__dirname + "/" + "/cambien1.html");
});

module.exports = router;
