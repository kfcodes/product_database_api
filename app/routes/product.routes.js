// Get all the products from a specific Brand
module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Create a new product
  app.post("/products", products.create);

  // Retrieve all products
  app.get("/products", products.findAll);

  // Retrieve all products from specific brand
  app.get("/products/products_from_brand/:brandId", products.findByBrand);

  // Retrieve a single product with productId
  app.get("/products/:productId", products.findOne);

  // Update a product with productId
  app.put("/products/:productId", products.update);

  // Delete a product with productId
  app.delete("/products/:productId", products.delete);

  // Delete all products from the db
  app.delete("/products", products.deleteAll);
};
