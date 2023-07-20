const FinishedProduct = require("../../models/finishedProducts/finishedProduct.models");

// Find a single eol with eolid
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
