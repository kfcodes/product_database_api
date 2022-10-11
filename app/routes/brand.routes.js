module.exports = (app) => {
  const brands = require("../controllers/employee.controller.js");

  // Retrieve all brands
  app.get("/brands", brands.findAll);
};
