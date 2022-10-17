module.exports = (app) => {
  const brands = require("../controllers/employee.controller.js");

  // Create a new brand
  app.post("/brands", brands.create);

  // Retrieve all brands
  app.get("/brands", brands.findAll);

  // Retrieve a single brand with brandId
  app.get("/brands/:brandId", brands.findOne);

  // Update a brand with brandId
  app.put("/brands/:brandId", brands.update);
};
