const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const productLabel = require("../../outline/boxLabel/defaultProductLabel");
const labelData = require("./defaultProductLabelData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");

module.exports.PrintBoxLabel = async function (data, qty) {
  CreateEmptyLabelFile().then(() => {
    productLabel().then((outline) => {
      writeToLabel(outline).then(() => {
        labelData(data, qty).then((file) => {
          PrintLargeLabel(file);
        });
      });
    });
  });
};
