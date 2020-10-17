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

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await new CurrenciesRepository().delete(id);
  res.status(202).json(data);
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const currency = req.body;
  const data = await new CurrenciesRepository().update(currency, id);
  res.status(202).json(data);
});

module.exports = router;
