const Pallet = require("../../models/pallet/pallet.models");

// Retrieve all products from the database.
exports.findAllPallets = (req, res) => {
  Pallet.getAllPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

