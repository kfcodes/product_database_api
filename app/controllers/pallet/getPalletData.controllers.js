const PalletList = require("../../models/palletList/palletList.models")

const getPalletData = () => {
  return new Promise((resolve, reject) => {
  PalletList.getPickListData((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving checksheet data",
      });
      resolve(data);
  });
  });
};

module.exports = getPalletData;
