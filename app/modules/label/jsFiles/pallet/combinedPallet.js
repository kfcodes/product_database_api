const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const GetPalletLabelStructure = require("../../outline/palletLabel/palletLabel_CombinedPallet");
const AddPalletData = require("./combinedPalletData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");

module.exports.PrintPalletLabel = async function (data) {
  CreateEmptyLabelFile().then(() => {
    GetPalletLabelStructure().then((outline) => {
      writeToLabel(outline).then(() => {
        AddPalletData(data).then((palletData) => {
          writeToLabel(palletData).then((file) => {
            console.log(file);
            PrintLargeLabel(file);
          });
        });
      });
    });
  });
};
