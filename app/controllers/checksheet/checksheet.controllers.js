const FormatData = require("./formatPalletData");
const getPalletData = require("./getPalletData");
const CreatePDF = require("./pdf");

exports.printCheckSheet = async (req, res) => {
  getPalletData().then((palletdata) => {
    FormatData(palletdata).then((checksheetData) => {
      CreatePDF.CreatePdf(checksheetData);
      res.send("The check sheet is being printed");
    });
  });
};
