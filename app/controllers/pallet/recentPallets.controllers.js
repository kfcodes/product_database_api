const PalletList = require("../../models/palletList/palletList.models")

exports.findRecentPallets = (req, res) => {
  PalletList.getRecentPallets((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else res.send(data);
  });
};

exports.findPalletData = async(req, res) => {
  PalletList.getPalletListData((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else 
    res.send(data);
  });
};
