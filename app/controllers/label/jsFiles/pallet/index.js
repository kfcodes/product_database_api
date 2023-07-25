const AddProducts = require("./palletProductsLoop");
const CreateEmptyLabelFile = require("./emptyFile");
const {PrintLargeLabel} = require("../../../print/printZplLabel");
const writeToLabel = require("./writeToLabel");
const GetPalletLabelStructure = require("../../labelStructure/palletLabel/palletLabel_PalletDetailsAndFirstProduct");

module.exports.CreateLabel = async function (results) {
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
