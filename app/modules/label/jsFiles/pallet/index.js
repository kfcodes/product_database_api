const AddProducts = require("./palletProductsLoop");
const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");
const writeToLabel = require("../../../file/writeToLabel");
const GetPalletLabelStructure = require("../../outline/palletLabel/palletLabel_PalletDetailsAndFirstProduct");

module.exports.PrintPalletLabel = async function (results) {
  CreateEmptyLabelFile().then(() => {
    GetPalletLabelStructure().then((outline) => {
      writeToLabel(outline).then(() => {
        AddProducts(results).then((file) => {
          PrintLargeLabel(file);
        });
      });
    });
  });
};
