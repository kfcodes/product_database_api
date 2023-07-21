const FormatData = require("./formatPalletData");
const getPalletData = require("./getPalletData");

exports.printCheckSheet = async (req, res) => {
  getPalletData().then((palletdata) => {
    FormatData(palletdata).then((checksheetData) => {
      res.send(checksheetData);
    });
  });
};
