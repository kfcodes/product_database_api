const { modifyPDF } = require("./modifyPdf.js");
const { printPdfFile } = require("../print/printPdf");

module.exports.ModifyPrintPdf = async function (file, result) {
  return new Promise((resolve, reject) => {
    modifyPDF(file).then((modifiedFile) => {
      printPdfFile(modifiedFile).then((response) => {
        resolve(response);
      });
    });
  });
};
