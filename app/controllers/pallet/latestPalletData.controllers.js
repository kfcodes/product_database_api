const PalletList = require("../../models/palletList/palletList.models");
const FormatPalletProducts = require("../../modules/palletData/palletData");

const getLatestPalletsFromDB = () => {
  return new Promise((resolve, reject) => {
    PalletList.getLatestPallets((err, response) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      resolve(response);
    });
  });
};

const getPalletProducts = (id) => {
  return new Promise((resolve, reject) => {
    PalletList.getPalletProducts(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      else 
      FormatPalletProducts(data).then((palletProducts) => {
      resolve(palletProducts);
      });
    });
  });
};

