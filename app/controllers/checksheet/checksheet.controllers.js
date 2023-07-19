const PalletList = require("../../models/palletList/palletList.models")

exports.printCheckSheet = (req, res) => {
  PalletList.getPalletData((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving checksheet data",
      });
    res.send(data);
  });
};
