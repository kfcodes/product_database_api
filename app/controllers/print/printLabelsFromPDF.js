const PrintFunction = require("./printFunction");

const printer = process.env.LargeLabelPrinter;
const settings = process.env.PDFLablelSettings;

module.exports.printPdfFile = (file) => {
const printFile = `${file}.pdf`
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, printFile).then((res) => {
      resolve(res);
    });
  });
};
