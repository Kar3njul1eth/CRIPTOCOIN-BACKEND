const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(202).json([]);
});

router.post("/create", (req, res) => {
  res.status(202).json([]);
});

router.delete("/delete", (req, res) => {
  res.status(202).json([]);
});

router.put("/update", (req, res) => {
  res.status(202).json([]);
});

module.exports = router;
