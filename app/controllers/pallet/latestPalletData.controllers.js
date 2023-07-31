const PalletList = require("../../models/palletList/palletList.models");
const formatData = require("../../modules/palletData/palletData");

exports.getLatestPalletsFromDB = () => {
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

exports.getProductsOnPallet = (id) => {
  return new Promise((resolve, reject) => {
    PalletList.getPalletProducts(id, (err, products) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      else
        formatData.formatPalletProducts(products).then((palletProducts) => {
          resolve(palletProducts);
        });
    });
  });
};
