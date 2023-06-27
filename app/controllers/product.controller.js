// Select Products based on brand
const Product = require("../models/products.model.js");

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  // Create a Product
  const product = new Product({
    product_id: req.body.product_id,
    product_description: req.body.product_description,
    commodity_code: req.body.commodity_code,
    stock: req.body.stock,
    prefix: req.body.prefix,
  });

  // Save Product in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    else res.send(data);
  });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
  Product.findById(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.productId,
        });
      }
    } else res.send(data);
  });
};

// Update an product identified by the productId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  Product.updateById(
    req.params.productId,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.productId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.productId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete an product with the specified productId in the request
exports.delete = (req, res) => {
  Product.remove(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Product with id " + req.params.productId,
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products.",
      });
    else res.send({ message: `All Products were deleted successfully!` });
  });
};

// Retrieve all brands from the database.
exports.findAllBrands = (req, res) => {
  Product.getAllBrands((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    else res.send(data);
  });

};

// Find All products from a single brand
exports.productsFromBrand = (req, res) => {
  Product.productsFromBrand(req.params.brandId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Retrieve all products from the database.
exports.findFinishedProducts = (req, res) => {
  Product.getAllFinishedProducts((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};
// Find a single BOM for a productId
exports.findBom = (req, res) => {
  Product.findBomById(req.params.productId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.productId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + req.params.productId,
        });
      }
    } else res.send(data);
  });
};
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
// Retrieve all products from the database.
exports.printCheckSheet = (req, res) => {
  Product.getPalletData((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    // res.send(data);
    // else myFunction(data);
    function myFunction(data) {
      let previousPallet = 0;
      data.forEach((item) => {
        console.log("The Pallet ID is");
        console.log(item.PALLET);
        if (item.PALLET == previousPallet) {
          // console.log("This is a duplicate pallet");
        } else {
          // console.log("This is NOT a duplicate pallet");
          previousPallet = item.PALLET;
        }
      });
    }
    CreatePdf.CreatePdf(data);
    // res.status(status).send(body)
    // console.log("Printed The Check Sheet With: ", data);
    console.log("Printed The Check Sheet");
    res.send(`Printed The Check Sheet`);
    // res.send(data);
  });
};
// Find a single Pallet with Palletid
exports.printPalletLabel = (req, res) => {
  Product.printPalletLabel(req.params.palletid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Pallet with id ${req.params.palletid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Pallet with id " + req.params.palletid,
        });
      }
    } else labels.CreateLabel(data);
    // console.log(data);
    // console.log("Printed the data");
    res.send(data);
  });
};
// Find a single Pallet with Palletid
exports.printBoxLabel = (req, res) => {
  Product.printBoxLabel(req.params.eolid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find eol with id ${req.params.eolid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving eol with id " + req.params.eolid,
        });
      }
    }
    // res.send(data);
    // console.log("This is the data from Controller:");
    // console.log(data);
    // console.log("This is the data from Controller:");
    else boxLabel.boxLabel(data, req.body.batch, req.body.label_quantity);
    // console.log(data, req.body.batch, req.body.label_quantity);
  });
};
// Retrieve all production data
exports.findCurrentProduction = (req, res) => {
  Product.getCurrentProduction((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving production data.",
      });
    else res.send(data);
  });
};
// Retrieve all production data
exports.findAllProduction = (req, res) => {
  Product.getAllProduction((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving production data.",
      });
    else res.send(data);
  });
};
// Create an Eol
exports.createEol = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  // console.log("This is the request.body");
  // console.log(req.body);
  // console.log(req.body.po);
  // Create a Eol
  // const eol = new Eol({
  //   eol_po: req.body.po,
  //   eol_product_id: req.body.productId,
  //   eol_lot: req.body.lot,
  //   eol_bbe: req.body.bbe,
  //   eol_quantity: 0
  // });
  // console.log("This is the Eol data from the controller function:");
  // console.log(eol);
  // Save Eol in the database
  // Eol.createNewEol(eol, (err, data) => {
  Eol.createNewEol(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
    console.log(data);
  });
};
// Find a single eol with eolid
exports.findEol = (req, res) => {
  Eol.findEolById(req.params.eolid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find eol with id ${req.params.eolid}`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving eol with id " + req.params.eolid,
        });
      }
    } else res.send(data);
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
