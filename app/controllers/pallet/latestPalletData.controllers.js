const PalletList = require("../../models/palletList/palletList.models");
const formatData = require("../../modules/pallet/palletData");

exports.getLatestPalletsFromDB = () => {
  return new Promise((resolve) => {
    PalletList.getLatestPallets((err, pallets) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      else resolve(pallets);
    });
  });
};

exports.getProductsOnPallet = (id) => {
  return new Promise((resolve) => {
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

exports.latestPalletData = async (req, res) => {
  this.getLatestPalletsFromDB()
    .then((pallets) => formatData.formatPalletAndProductsData(pallets))
    .then((latestPalletData) => res.send(latestPalletData));
};
