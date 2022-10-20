// Delete products from the db
const Product = require("../models/employees.model.js");

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    else res.send(data);
  });
};

// Find a single employee with a employeeId
exports.findOne = (req, res) => {
  Product.findById(req.params.employeeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.employeeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.employeeId,
        });
      }
    } else res.send(data);
  });
};

// Update an employee identified by the employeeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  Product.updateById(
    req.params.employeeId,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.employeeId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.employeeId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete an employee with the specified employeeId in the request
exports.delete = (req, res) => {
  Product.remove(req.params.employeeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.employeeId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Product with id " + req.params.employeeId,
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};

// Delete all employees from the database.
exports.deleteAll = (req, res) => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all employees.",
      });
    else res.send({ message: `All Products were deleted successfully!` });
  });
};
