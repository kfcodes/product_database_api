const Brand = require("../models/brands.model.js");

// Retrieve all brands from the database.
exports.findAll = (req, res) => {
  Brand.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    else res.send(data);
  });
};
