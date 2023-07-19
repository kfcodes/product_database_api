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

// Find a single Pallet with Palletid
exports.findPallet = (req, res) => {
  Pallet.findPalletById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Pallet ${req.params.palletid}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Pallet ${req.params.palletid}`,
        });
      }
    } else res.send(data);
  });
};
