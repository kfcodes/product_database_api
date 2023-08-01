const { SplitPdf } = require("./splitPdf.js");
const { printPdfFile } = require("../print/printPdf");

module.exports.PrintPdf = async function (id, result) {
  return new Promise((resolve, reject) => {
  SplitPdf(id).then((file) => {
    printPdfFile(file).then((res) => {
resolve(res);
    })
  });
  });
};
