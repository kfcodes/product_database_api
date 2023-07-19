const Pallet = require("../../models/pallet/pallet.models");

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
  Pallet.createNewPallet(
    new Pallet(req.body),
    (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
    console.log(data);
  });
};

