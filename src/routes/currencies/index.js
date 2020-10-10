const express = require("express");
const CurrenciesRepository = require("../../repositories/currencies");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await new CurrenciesRepository().getAll();
  res.status(202).json(data);
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const data = await new CurrenciesRepository().getCurrencyByName(name);
  res.status(202).json(data);
});

router.post("/create", async (req, res) => {
  const data = await new CurrenciesRepository().create(req.body);
  res.status(202).json(data);
});

router.delete("/delete", (req, res) => {
  res.status(202).json([]);
});

router.put("/update", (req, res) => {
  res.status(202).json([]);
});

module.exports = router;
