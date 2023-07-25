const { SplitPdf } = require("./splitPdf.js");
const { printPdfFile } = require("../print/printLabelsFromPDF");

module.exports.PrintPdf = async function (id, result) {
  return new Promise((resolve, reject) => {
  SplitPdf(id).then((file) => {
    printPdfFile(file).then((res) => {
resolve(console.log("finished"));
    })
  });
  });
};
