const PalletList = require("../../models/palletList/palletList.models");

// Find a single Pallet with Palletid
exports.getData = (req, res) => {
  PalletList.getInfo(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving req.params.id`,
        });
      }
    } else res.send(data);
  });
};
