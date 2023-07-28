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

const getProductsOnPallet = (id) => {
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

exports.latestPalletData = async (req, res) => {
const palletDetails = await getLatestPalletsFromDB();
const palletsWithProducts = await loopPalletsAndGetProducts(palletDetails, pallets_array = [] );
      res.send(palletsWithProducts)
};
