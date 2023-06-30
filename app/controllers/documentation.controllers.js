// Select Products based on brand
const Product = require("../models/products.model.js");
// Retrieve all brands from the database.
exports.findAllBrands = (req, res) => {
  Product.getAllBrands((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    else res.send(data);
  });
};
// Find All products from a single brand
exports.productsFromBrand = (req, res) => {
  Product.productsFromBrand(req.params.brandId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findFinishedProducts = (req, res) => {
  Product.getAllFinishedProducts((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Find a single BOM for a productId
exports.findBom = (req, res) => {
  Product.findBomById(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.productId,
        });
      }
    } else res.send(data);
  });
};
