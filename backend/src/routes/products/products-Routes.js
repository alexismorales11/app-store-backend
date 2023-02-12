const express = require("express");

const productServices = require("../../services/products/products-services");

const productRoutes = express();

const services = new productServices();

//EndPoint Get todos los productos
productRoutes.get("/", async (req, res) => {
  const products = await services.find();
  res.json(products);
});

//EndPoint Get productos por ID
productRoutes.get("/:id", async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const products = await services.findOne(id);
    res.json(products);

  } catch (error) {
    next(error);
  }
});

//POST
productRoutes.post("/newProduct", async (req, res) => {
  const body = req.body;
  const products = await services.create(body);
  res.json(products);
});

productRoutes.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const products = await services.update(id, changes);

    res.json(products);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

productRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const products = await services.delete(id);
  res.json(products);
});

module.exports = productRoutes;
