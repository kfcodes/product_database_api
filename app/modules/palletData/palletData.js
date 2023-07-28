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

