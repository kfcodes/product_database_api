const PrintFunction = require("./printFunction");

const printer = process.env.LargeLabelPrinter;
const settings = process.env.PDFLablelSettings;

module.exports.printPdfFile = (file) => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      resolve(res);
    });
  });
};
