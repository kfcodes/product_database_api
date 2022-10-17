module.exports = (app) => {
  const brands = require("../controllers/employee.controller.js");

  // Retrieve all brands
  app.get("/brands", brands.findAll);

  // Retrieve a single brand with brandId
  app.get("/brands/:brandId", brands.findOne);
};
