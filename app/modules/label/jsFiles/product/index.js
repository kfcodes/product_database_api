const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const productLabel = require("../../outline/boxLabel/defaultProductLabel");
const labelData = require("./defaultProductLabelData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");

module.exports.PrintBoxLabel = async function (data) {
  CreateEmptyLabelFile().then(() => {
    productLabel().then((outline) => {
      writeToLabel(outline).then(() => {
        labelData(data).then((file) => {
          PrintLargeLabel(file);
        });
      });
    });
  });
};
