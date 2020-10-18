const express = require("express");
const NewsRepository = require("../../repositories/news");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await new NewsRepository().getAll();
  res.status(202).json(data);
});

router.get("/:titulo", async (req, res) => {
  const { titulo } = req.params;
  const data = await new NewsRepository().getNewsByName(titulo);
  res.status(202).json(data);
});

router.post("/create", async (req, res) => {
  const data = await new NewsRepository().create(req.body);
  res.status(202).json(data);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await new NewsRepository().delete(id);
  res.status(202).json(data);
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const news = req.body;
  const data = await new NewsRepository().update(news, id);
  res.status(202).json(data);
});

module.exports = router;
