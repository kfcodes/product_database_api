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

