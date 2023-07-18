const ProductDB = require("../../models/finishedProducts/productDB.models.js");

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  ProductDB.getAll((err, data) => {
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
  ProductDB.getAllFinishedProducts((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

// Find a single product using ID
exports.findOne = (req, res) => {
  ProductDB.findById(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No Product with id of ${req.params.productId}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Product ${req.params.productId}`,
        });
      }
    } else res.send(data);
  });
};
