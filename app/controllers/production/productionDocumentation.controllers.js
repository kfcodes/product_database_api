const Documentation = require("../../models/documentation/documentation.models.js");

exports.findAllBrands = (req, res) => {
  Documentation.getAllBrands((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    else res.send(data);
  });
};

exports.brandProducts = (req, res) => {
  Documentation.getbrandProducts(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

exports.productDocumentation = (req, res) => {
  Documentation.getProductionInfo(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `${req.params.id} NOT FOUND`,
        });
      } else {
        res.status(500).send({
          message: `ERROR RETRIEVING ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};
