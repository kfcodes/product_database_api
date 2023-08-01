const { getPalletLabelData } = require("../../models/label/labeldata.models");
const {
  PrintPalletLabel,
} = require("../../modules/label/jsFiles/pallet/index");

exports.printPalletLabel = (req, res) => {
  getPalletLabelData(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find data for ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error finding data for ${req.params.id}`,
        });
      }
    } else PrintPalletLabel(data);
  });
};
