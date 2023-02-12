const express = require("express");
const productRoute = require("./src/routes/index");
const { logError, resError } = require("./src/middleware/error")

const app = express();
const port = 3000;


app.use(express.json());
productRoute(app);

//MidelWare
app.use(logError);
app.use(resError);


app.listen(port, () => {
  console.log("Escuchando en puerto " + port);
});
