const PrintFunction = require("./printFunction");

const printer = process.env.A4Printer;
const settings = process.env.CheckSheetSettings;

module.exports.PrintPickList = (file) => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      resolve(res);
    });
  });
};
