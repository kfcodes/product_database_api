const PrintFunction = require("./printFunction");

const file = "../label/labelStructure/blank_label.zpl";
const printer = process.env.LargeLabelPrinter;
const settings = process.env.LargeLabelPrinterSettings;

module.exports.PrintBlankLabel = () => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
};
