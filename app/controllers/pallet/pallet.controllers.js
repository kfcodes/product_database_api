const Pallet = require("../../models/pallet/pallet.models");
const PalletsList = require("../../modules/pallet/combinePallets");
const {
  PrintPalletLabel,
} = require("../../modules/label/jsFiles/pallet/combinedPallet");

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

exports.createPallet = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  Pallet.createNewPallet(new Pallet(req.body), (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  // let date = new Date().toISOString();
  Pallet.updatePalletById(req.params.id, new Pallet(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No Pallet with id ${req.params.palletid}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Pallet ${req.params.palletid}`,
        });
      }
    } else res.send(data);
  });
};

exports.palletsById = (req, res) => {
  Pallet.getPalletsWithId(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pallets",
      });
    else res.send(data);
  });
};

exports.getPossiblePallets = (req, res) => {
  Pallet.getPossiblePalletIds((err, ids) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else {
      const pallets = [];
      ids.forEach(myFunction);
      function myFunction(item) {
        pallets.push(item.id);
      }
      res.send(pallets);
    }
  });
};

exports.combinePallets = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  PalletsList(req.body.pallets).then((palletList) => {
    Pallet.combinePallets(palletList, req.body.height, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No Pallets that match ${req.params.palleData}.`,
          });
        } else {
          res.status(500).send({
            message: `Error updating Pallets ${req.params.palleData}`,
          });
        }
      }
    }).then(() => {
      Pallet.combinedPalletWeight(palletList.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No Pallets that match ${req.params.palleData}.`,
            });
          } else {
            res.status(500).send({
              message: `Error updating Pallets ${req.params.palleData}`,
            });
          }
        }
      }).then((grossweigth) => {
        const palletData = {
          height: req.body.height,
          weight: grossweigth,
          pallets: req.body.pallets,
        };
        PrintPalletLabel(palletData);
        res.send(palletData);
      });
    });
  });
};

exports.getPalletDetails = (req, res) => {
  Pallet.getPalletDetails(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Pallet ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Pallet ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};
