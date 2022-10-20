// Delete products from the db
module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all products
  app.get("/products", products.findAll);

  // Retrieve a single product with productId
  app.get("/products/:productId", products.findOne);

  // Update a product with productId
  app.put("/products/:productId", products.update);

  // Delete a product with productId
  app.delete("/products/:productId", products.delete);

  // Delete all products from the db
  app.delete("/products", products.deleteAll);
};
