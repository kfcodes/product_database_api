const PalletList = require("../../models/palletList/palletList.models");
const FormatData = require("../../modules/palletData/formatData");

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

exports.findPalletData = async (req, res) => {
  getPalletData().then((palletdata) => {
    FormatData(palletdata).then((data) => {
      res.send(data);
    });
  });
};

const getPalletData = () => {
  return new Promise((resolve, reject) => {
    PalletList.getPalletListData((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "An error occurred while retrieving pallet data",
        });
      resolve(data);
    });
  });
};
