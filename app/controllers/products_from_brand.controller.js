// Select Products based on brand
const Product_from_brand = require("../models/products_from_brand.model.js");

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Product_from_brand.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

// Find a single product with a productId
exports.findByBrand = (req, res) => {
  console.log(req);
  Product_from_brand.findByBrand(req.params.brandId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
