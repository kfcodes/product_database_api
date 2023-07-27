const PrintFunction = require("./printFunction");

const file = "../../controllers/label/labelStructure/blankLabels.zpl"
const printer = process.env.LargeLabelPrinter;
const settings = process.env.LargeLabelPrinterSettings;

module.exports.PrintBlankLabel = () => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      resolve(res);
    });
  });
};
