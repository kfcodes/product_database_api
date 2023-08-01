const getPalletData = require("../pallet/getPalletData.controllers");
const FormatData = require("../../modules/pallet/formatPalletData");
const CreatePDF = require("../../modules/pdf/pdf");

exports.printPickList = async (req, res) => {
  getPalletData().then((palletdata) => {
    FormatData(palletdata).then((data) => {
      CreatePDF(data);
    });
  });
};
