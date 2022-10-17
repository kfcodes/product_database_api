const Brand = require("../models/brands.model.js");

// Create and Save a new brand
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  // Create a Brand
  const brand = new Brand({
    prefix: req.body.prefix,
    name: req.body.name,
  });

  // Save Brand in the database
  Brand.create(brand, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
  });
};

// Retrieve all brands from the database.
exports.findAll = (req, res) => {
  Brand.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    else res.send(data);
  });
};

// Find a single brand with a employeeId
exports.findOne = (req, res) => {
  Brand.findById(req.params.brandId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res
          .status(404)
          .send({ message: `Not found Brand with id ${req.params.brandId}.` });
      } else {
        res.status(500).send({
          message: "Error retrieving Brand with id " + req.params.brandId,
        });
      }
    } else res.send(data);
  });
};

// Update an brand identified by the brandId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  Brand.updateById(req.params.brandId, new Brand(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res
          .status(404)
          .send({ message: `Not found Brand with id ${req.params.brandId}.` });
      } else {
        res.status(500).send({
          message: "Error updating Brand with id " + req.params.brandId,
        });
      }
    } else res.send(data);
  });
};
