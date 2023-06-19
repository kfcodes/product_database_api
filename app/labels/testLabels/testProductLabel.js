const fs = require("fs");

function newLoop() {
  fs.writeFile("testproduct.zpl", "", function () {
    console.log("Empty File created");
  }).then(
      writeToLabel("outline").then(
      writeToLabel("data").then(
      writeToLabel("end"))))
  .catch(err => console.log(err))
}

module.exports.CreateLabel = async function () {
   newLoop()
  // printLabel();
};

function writeToLabel(pallet) {
  fs.appendFile("testproduct.zpl", pallet, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}
