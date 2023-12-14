const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const GetPalletLabelStructure = require("../../outline/palletLabel/palletLabel_CombinedPallet");
const AddPalletData = require("./combinedPalletData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");
const fs = require('node:fs');
const fetch = require("node-fetch");

module.exports.PrintPalletLabel = async function (data) {
  CreateEmptyLabelFile().then(() => {
    GetPalletLabelStructure().then((outline) => {
      writeToLabel(outline).then(() => {
        AddPalletData(data).then((palletData) => {
          writeToLabel(palletData).then((file) => {
              const data = fs.readFileSync(file, 'utf8');
		        const label_data = { label_info: data };
              fetch(`http://192.168.1.26:8000/print_large_combined_label/`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(label_data),
    }).then((result) => {
      console.log(result);
    });
    });
  });
  });
  });
  });
};
