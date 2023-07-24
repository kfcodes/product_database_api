const newLoop = require("./palletProductsLoop")

module.exports.CreateLabel = async function (results) {
   newLoop(results);
   processFile();
};

function processFile() {
  // printPalletLabel();
  console.log("The label is ready to print");
}

