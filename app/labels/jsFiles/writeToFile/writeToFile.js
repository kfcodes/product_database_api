const fs = require("fs");

module.exports.CreateEmptyFile = async function () {
  fs.writeFile("label.zpl", "", function () {
    console.log("Empty File created");
  })}

module.exports.AppendOutline = async function (labelType) {
  fs.appendFile(`label.zpl`, labelType, (err) => {
    if (err) console.log(err);
    else {
      console.log("Outline written successfully\n");
    }
  });
}

module.exports.AppendData = async function (data) {
  fs.appendFile(`label.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("Data written successfully\n");
    }
  });
}

module.exports.EndLabel = async function () {
  fs.appendFile(`label.zpl`, `${end}`, (err) => {
    if (err) console.log(err);
    else {
      console.log("Label end written\n");
    }
  });
}
