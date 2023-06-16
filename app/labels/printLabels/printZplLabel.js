const fs = require("fs");
const sql = require("../models/db");
const { exec } = require("child_process");


function printZplFIle(printer,file) {
  exec(
    `lpr -P ${printer} -o raw ${file}.zpl`,
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
  console.log("The Label was Printed");
}

module.exports.printLabel = async function (printer,file) {
   printZplFIle(printer,file);
};
