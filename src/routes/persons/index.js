const express = require("express");
const PersonsRepository = require("../../repositories/persons");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await new PersonsRepository().getAll();
  res.status(202).json(data);
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const data = await new PersonsRepository().getCurrencyByName(name);
  res.status(202).json(data);
});

router.post("/create", async (req, res) => {
  const data = await new PersonsRepository().create(req.body);
  res.status(202).json(data);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await new PersonsRepository().delete(id);
  res.status(202).json(data);
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const persons = req.body;
  const data = await new PersonsRepository().update(persons, id);
  res.status(202).json(data);
});

module.exports = router;
