const {
  getProductsOnPallet,
} = require("../../controllers/pallet/latestPalletData.controllers");

exports.formatPalletProducts = (products) => {
  return new Promise((resolve, reject) => {
    const palletProducts = [];
    for (let j = 0; j < products.length; j++) {
      const product = {
        ID: products[j].pallet_item_product_id,
        LOT: products[j].lot,
        BBE: products[j].bbe,
        BATCH: products[j].batch,
        QTY: products[j].quantity,
        DESCRIPTION: products[j].product_description,
      };
      palletProducts.push(product);
    }
    resolve(palletProducts);
  });
};

exports.formatPalletData = async (pallet, products) => {
  return new Promise((resolve, reject) => {
    const pallet_data = {
      height: pallet.height,
      weight: pallet.weight,
      pallet: pallet.pallet_id,
      type: pallet.pallet_name,
    };
    pallet_data.products = products;
    resolve(pallet_data);
  });
};
