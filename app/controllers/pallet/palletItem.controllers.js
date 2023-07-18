const PalletItem = require("../../models/pallet/palletItem.models.js");
const PalletList= require("../../models/palletList/palletList.models");

// Retrieve all products from the database.
exports.findAllPalletItems = (req, res) => {
  PalletItem.getAllPalletItems((err, data) => {
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
  PalletItem.getProductsForPallet(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

exports.deletePalletItem = (req, res) => {
  PalletItem.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Pallet item with id ${req.params.id} Not found`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Pallet item with id  ${req.params.id}`
        });
      }
    } else res.send({ message: `Pallet item was deleted successfully!` });
  });
};

