const CreateEmptyLabelFile = require("../../../../modules/file/createEmptyFile");
const writeToLabel = require("../../../file/writeToLabel");
const productLabel = require("../../outline/boxLabel/defaultProductLabel");
const LabelData = require("./defaultProductLabelData");
const { PrintLargeLabel } = require("../../../../modules/print/printFile");

module.exports.PrintBoxLabel = async function (data, qty) {
  CreateEmptyLabelFile().then(() => {
    productLabel().then((outline) => {
      writeToLabel(outline).then(() => {
        LabelData(data[0], qty).then((completefile) => {
          writeToLabel(completefile).then((file) => {
            const data = fs.readFileSync(file, "utf8");
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
