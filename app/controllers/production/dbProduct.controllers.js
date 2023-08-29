const ProductDB = require("../../models/finishedProducts/productDB.models.js");

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

exports.findOneFinishedProduct = (req, res) => {
  ProductDB.findFinsishedProductById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `${req.params.id} NOT FOUND`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving ${req.params.productId}`,
        });
      }
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  ProductDB.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `${req.params.id} NOT FOUND`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving ${req.params.productId}`,
        });
      }
    } else res.send(data);
  });
};
