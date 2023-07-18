

// Find a single Pallet with Palletid
exports.findPallet = (req, res) => {
  Product.findPalletById(req.params.palletid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Pallet with id ${req.params.palletid}, if the pallet has no items on it it will not show up here`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Pallet with id " + req.params.palletid,
        });
      }
    } else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findRecentPallets = (req, res) => {
  Product.getRecentPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findRecentPallets = (req, res) => {
  Product.getRecentPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findAllPallets = (req, res) => {
  Product.getAllPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findPalletData = (req, res) => {
  Product.getPackingListData((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else myFunction(data);
    function myFunction(data) {
      let previousPallet = 0;
      data.forEach((item) => {
        if (item.PALLET == previousPallet) {
          item.WEIGHT = null;
          item.DIMENSIONS = null;
          item.PALLET = null;
        } else {
          previousPallet = item.PALLET;
        }
        if (item.ID == "YFOOD4011") {
          item.COMPANY = "MultiPack";
        } else {
          console.log("no Company");
        }
      });
    }
    res.send(data);
  });
};
// Retrieve all products from the database.
exports.findAllPalletItems = (req, res) => {
  Product.getAllPalletItems((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Find All pallet items for a single pallet
exports.findPalletItemsForPallet = (req, res) => {
  Product.getPalletsForPallet(req.params.palletid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Find All pallets from a single brand
exports.findAllPalletsfromBrand = (req, res) => {
  Product.getPalletsFromBrand(req.params.brand_prefix, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Create and Save a new brand
exports.createPallet = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  // Create a Palelt
  const pallet = new Pallet({
    empty_weight: req.body.empty_weight,
    weight: req.body.weight,
    height: req.body.height,
    pallet_type: req.body.pallet_type,
    packing_list: req.body.packing_list,
  });
  // Save Pallet in the database
  Pallet.createNewPallet(pallet, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
    console.log(data);
  });
};
// Update a pallet identified by the pallet in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  console.log(req.body);
  let date = new Date().toISOString();
  Pallet.updatePalletById(
    req.params.palletid,
    new Pallet(req.body),
    date,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Pallet with id ${req.params.palletid}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Pallet with id " + req.params.palletid,
          });
        }
      } else res.send(data);
    }
  );
};
// Create and Save a new pallet item
exports.createPalletItem = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  const palletItem = new PalletItem({
    pallet_item_pallet_id: req.body.pallet_item_pallet_id,
  });
  PalletItem.createNewPalletItem(palletItem, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pallet Item.",
      });
    else res.send(data);
  });
};
exports.updatePalletItem = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  console.log(req.body);
  console.log(req.params.itemid);
  PalletItem.updatePalletItemById(
    req.params.itemid,
    new PalletItem(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Pallet item with id ${req.params.itemid}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Pallet with id " + req.params.itemid,
          });
        }
      } else res.send(data);
    }
  );
};
// Delete an brand with the specified employeeId in the request
exports.deletePalletItem = (req, res) => {
  PalletItem.remove(req.params.itemid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pallet item with id ${req.params.itemid}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Pallet item with id " + req.params.itemid,
        });
      }
    } else res.send({ message: `Pallet item was deleted successfully!` });
  });
};
