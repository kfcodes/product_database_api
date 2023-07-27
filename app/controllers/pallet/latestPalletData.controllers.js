const PalletList = require("../../models/palletList/palletList.models");

const latestPallets = () => {
  return new Promise((resolve, reject) => {
    PalletList.getLatestPallets((err, pallets) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      const pal = pallets;
      resolve(pal);
    });
  });
};

const latestPalletProducts = (id) => {
  return new Promise((resolve, reject) => {
    PalletList.getLatestPalletProducts(id, (err, data) => {
      const products_array = [];
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      else
        for (let j = 0; j < data.length; j++) {
          const pallet_product = {
            ID: data[j].pallet_item_product_id,
            LOT: data[j].lot,
            BBE: data[j].bbe,
            BATCH: data[j].batch,
            QTY: data[j].quantity,
            DESCRIPTION: data[j].product_description,
          };
          products_array.push(pallet_product);
        }
      resolve(products_array);
    });
  });
};
