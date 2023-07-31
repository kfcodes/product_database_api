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

exports.latestPalletData = async (req, res) => {
  const pallets_array = [];
  const palletDetails = await this.getLatestPalletsFromDB();
};

const loopPalletsAndGetProducts = async (latestpallets, pallets_array) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < latestpallets.length; i++) {
      formatData
        .formatPalletAndProductsData(latestpallets[i].pallet_id,latestpallets[i])
        .then((FormattedPalletDatta) => {
          pallets_array.push(FormattedPalletDatta);
        })
    }
  })
        .then(() => {
    resolve(pallets_array)
  })
};
