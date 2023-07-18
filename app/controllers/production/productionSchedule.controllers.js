const ProductionSchedule = require("../../models/productionSchedule/productionSchedule.models.js");

// Retrieve All Production Data
exports.findAllProduction = (req, res) => {
  ProductionSchedule.getAllProduction((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving production data.",
      });
    else res.send(data);
  });
};

// Retrieve Current Production Data
exports.findCurrentProduction = (req, res) => {
  ProductionSchedule.getCurrentProduction((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving production data.",
      });
    else res.send(data);
  });
};
