const { exec } = require("child_process");
require('dotenv').config()

const blankLabel = require("../label/labelStructure/blank_label.zpl")

module.exports.PrintBlankLabel = async function () {
  exec(
    `lpr -P ${process.env.LargeLabelPrinter} -o raw ${blankLabel}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
}
