const ProductionSchedule = require("../../models/productionSchedule/productionSchedule.models.js");

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
