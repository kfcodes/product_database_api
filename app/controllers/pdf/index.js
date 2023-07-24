const { SplitPdf } = require("./splitPdf.js");
const { printPdfFile } = require("../print/printLabelsFromPDF");

module.exports.PrintPdf = async function (id, result) {
  SplitPdf(id).then((file) => {
    printPdfFile(file);
  });
  result(null);
  return;
};
