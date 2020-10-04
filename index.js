const express = require("express");

const app = express();

// public o cualquier carpeta
app.use(express.static("public"));
app.use(express.json());

// Iniciar el servidor
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server start in ${process.env.PORT || 3001} port`);
});

// End Points

// req = petición | res = respuesta
app.get("/:name", (req, res) => {
  const name = req.params.name;
  console.log(req.params);
  res.json([{ id: 1, name }]);
});

// req = petición | res = respuesta
app.post("/login", (req, res) => {
  const credentials = req.body;
  if (credentials.username === "maria" && credentials.password === "123456") {
    res.status(202).json({ login: true });
  } else {
    res.status(401).json({ login: false });
  }
});
