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
