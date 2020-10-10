const express = require("express");
const { news, currencies } = require("./src/routes");

const app = express();

// public o cualquier carpeta
app.use(express.static("public"));
app.use(express.json());

// Iniciar el servidor
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server start in ${process.env.PORT || 3001} port`);
});

app.use('/news', news);
app.use('/currencies', currencies);
