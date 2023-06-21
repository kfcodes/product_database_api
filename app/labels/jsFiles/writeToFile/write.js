const fs = require("fs");

module.exports.CreateEmptyFile = async function () {
  fs.writeFile("testproduct.zpl", "", function () {
    console.log("Empty File created");
  })}

module.exports.AppendToFile = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}
