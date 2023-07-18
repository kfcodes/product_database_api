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

exports.productsByBrand = (req, res) => {
  Documentation.productsByBrand(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

// Find a single BOM for a productId
exports.productComponents = (req, res) => {
  Documentation.getProductComponents(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No product found with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
