const PrintFunction = require("./printFunction");

const printer = process.env.LargeLabelPrinter;
const settings = process.env.LargeLabelPrinterSettings;

module.exports.PrintLargeLabel = (file) => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      resolve(res);
    });
  });
};

