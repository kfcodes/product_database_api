// Update a product
module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all products
  app.get("/products", products.findAll);

  // Retrieve a single product with productId
  app.get("/products/:productId", products.findOne);

  // Update a product with productId
  app.put("/products/:productId", products.update);
};
