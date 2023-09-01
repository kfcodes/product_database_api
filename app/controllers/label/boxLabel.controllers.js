const Label = require("../../models/label/labeldata.models");
const { PrintBoxLabel } = require("../../modules/label/jsFiles/product/index");

exports.getBoxLabel = (req, res) => {
  Label.getProductLabel(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Data for ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving data for ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};

exports.printBoxLabel = (req, res) => {
  Label.boxLabel(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Data for ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving data for ${req.params.id}`,
        });
      }
    } else
      PrintBoxLabel(data, req.body.qty).then(
        res.send({ message: "PRINTING THE LABEL" })
      );
  });
};
