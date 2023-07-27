const PrintFunction = require("./printFunction");

const printer = process.env.A4Printer;
const settings = process.env.CheckSheetSettings;

module.exports.printCheckSheet = (file) => {
  return new Promise((resolve, reject) => {
    PrintFunction(printer, settings, file).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
};
