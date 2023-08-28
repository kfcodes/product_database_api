const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const productLabel = require("../../outline/boxLabel/defaultProductLabel");
const LabelData= require("./defaultProductLabelData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");

module.exports.PrintBoxLabel = async function (data, qty) {
  CreateEmptyLabelFile().then(() => {
    productLabel().then((outline) => {
      writeToLabel(outline).then(() => {
        LabelData(data[0], qty).then((completefile) => {
          writeToLabel(completefile).then((file) => {
          PrintLargeLabel(file);
        });
      });
    });
  });
  });
};
