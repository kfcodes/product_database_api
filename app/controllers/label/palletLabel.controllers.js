const Label = require("../../models/label/labeldata.models");

exports.printPalletLabel = (req, res) => {
  Label.getPalletLabelData(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find Pallet ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error finding Pallet ${req.params.id}`,
        });
      }
    } else 
      // labels.CreateLabel(data);
    console.log(`Printing label`);
  });
};
