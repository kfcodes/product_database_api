const fs = require("fs");

module.exports.CreateEmptyFile = async function () {
  fs.writeFile("test.zpl", "", function () {
    console.log("Empty File created");
  })}

module.exports.AppendOutline = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

module.exports.AppendData = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

module.exports.AppendToFile = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

module.exports.EndLabel = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}
