const fs = require("fs");

const emptyFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${process.env.palletFileName}`, "", function () {
      resolve(console.log("The File was emptied"));
    });
  });
};

module.exports = emptyFile;
