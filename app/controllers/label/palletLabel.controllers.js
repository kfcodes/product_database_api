const LabelData = require("../../models/label/labeldata.models");
const {CreateLabel} = require("./jsFiles/pallet/index");

exports.printPalletLabel = (req, res) => {
  LabelData.getPalletLabelData(req.params.id, (err, data) => {
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
    } else 
      CreateLabel(data);
  });
};
