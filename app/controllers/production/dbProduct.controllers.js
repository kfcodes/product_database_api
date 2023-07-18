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

