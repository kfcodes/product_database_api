const PrintFunction = require("./printFunction");

const file =
  "~/app/modules/label/outline/multiple_internal_labels.zpl";
const printer = process.env.LargeLabelPrinter;
const settings = process.env.LargeLabelPrinterSettings;

module.exports.PrintBlankLabel = () => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      resolve(res);
    });
  });
};
