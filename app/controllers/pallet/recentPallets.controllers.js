const PalletList = require("../../models/palletList/palletList.models")

// Retrieve all products from the database.
exports.findRecentPallets = (req, res) => {
  PalletList.getRecentPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
