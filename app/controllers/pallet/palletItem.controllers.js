const PalletList= require("../../models/palletList/palletList.models");

// Retrieve all products from the database.
exports.findAllPalletItems = (req, res) => {
  PalletList.getAllPalletItems((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

// Find All pallet items on a pallet
exports.findPalletItemsForPallet = (req, res) => {
  PalletList.getProductsForPallet(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
