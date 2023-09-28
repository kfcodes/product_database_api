const ProductionSchedule = require("../../models/productionSchedule/productionSchedule.models.js");

exports.findAllProductionById = (req, res) => {
  ProductionSchedule.getProductionInfoById(req.params.id,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving production data.",
      });
    else res.send(data);
  });
};

exports.findProductionRecordById = (req, res) => {
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
