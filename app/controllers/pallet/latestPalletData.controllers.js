const PalletList = require("../../models/palletList/palletList.models");
const formatData = require("../../modules/palletData/palletData");

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

const getPalletProductsOnPallet = (id) => {
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

