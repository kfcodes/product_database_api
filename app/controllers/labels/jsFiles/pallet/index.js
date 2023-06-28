const fs = require("fs");
const sql = require("../models/db");
const { exec } = require("child_process");

module.exports.CreateLabel = async function (results) {
   newLoop(results);
   processFile();
};

function processFile() {
  // printPalletLabel();
  console.log("Printed");
}

function writeToLabel(pallet) {
  fs.appendFile("product_pallet.zpl", pallet, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

