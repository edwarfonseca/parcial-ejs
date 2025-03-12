const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/starwar.json");
const rawData = fs.readFileSync(dataPath);
const characters = JSON.parse(rawData);

router.get("/", (req, res) => {
  res.render("index", { characters });
});

module.exports = router;
