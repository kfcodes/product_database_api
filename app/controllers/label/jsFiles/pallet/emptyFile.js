const fs = require("fs");

const CreateEmptyLabelFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${process.env.palletFileName}`, "", function () {
      resolve(console.log("Created File"));
    });
  });
};

module.exports = CreateEmptyLabelFile;
