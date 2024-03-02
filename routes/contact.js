const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post("/submit", (req, res, next) => {
  const { name, email } = req.body;

  res.redirect("/success");
});


module.exports = router;
