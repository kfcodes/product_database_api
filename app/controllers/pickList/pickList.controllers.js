const getPalletData = require("../pallet/getPalletData.controllers");
const FormatData = require("../../modules/palletData/formatPalletData");
const CreatePDF = require("../../modules/pickList/pdf");

exports.printPickList = async (req, res) => {
  getPalletData().then((palletdata) => {
    FormatData(palletdata).then((data) => {
      CreatePDF(data);
    });
  });
};
