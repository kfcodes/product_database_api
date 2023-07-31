const Label = require("../../models/label/labeldata.models");

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
    }
    else boxLabel.boxLabel(data, req.body);
  });
};
