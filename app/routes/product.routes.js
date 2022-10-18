module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all products
  app.get("/products", products.findAll);
};
