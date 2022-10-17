const Brand = require("../models/brands.model.js");

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
