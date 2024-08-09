const express = require("express");
const app = express();
const router = express.Router();

//Solicitud GET
app.get("/", (req, res) => {
  res.send("¡Hola Express!");
});

//Solicitud POST
app.post("/nuevo", (req, res) => {
  res.send("Creando nuevo elemento");
});

router.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

router.get("/productos/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Detalles del producto ${productId}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});

module.exports = router;
