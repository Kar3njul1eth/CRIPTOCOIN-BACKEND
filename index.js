const cors = require("cors");
const express = require("express");
const { news, users, currencies, persons } = require("./src/routes");

const app = express();

// public o cualquier carpeta
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

// enable cors
app.use(cors());

// Iniciar el servidor
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server start in ${process.env.PORT || 3001} port`);
});

app.use("/news", news);
app.use("/users", users);
app.use("/currencies", currencies);
app.use("/persons", persons);
