const PalletItem = require("../../models/pallet/palletItem.models.js");

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

// Create and Save a new pallet item
exports.createPalletItem = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  console.log(req);
  const pid = new PalletItem({
    pallet_item_pallet_id: req.params.id,
  });
  PalletItem.createNewPalletItem(pid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error occurred creating pallet item",
      });
    else res.send(data);
  });
};

exports.updatePalletItem = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  PalletItem.updatePalletItemById(
    req.params.id,
    new PalletItem(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Pallet item with id ${req.params.id} Not found`,
          });
        } else {
          res.status(500).send({
            message: `Error updating Pallet item req.params.id`,
          });
        }
      } else res.send(data);
    }
  );
};
