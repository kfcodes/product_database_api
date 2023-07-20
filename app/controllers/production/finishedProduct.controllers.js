const FinishedProduct = require("../../models/finishedProducts/finishedProduct.models");

exports.findFinishedProduct = (req, res) => {
  FinishedProduct.findFinishedProductById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find eol with id ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving eol with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.createFinishedProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  FinishedProduct.createNewFinishedProduct(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
  });
};
