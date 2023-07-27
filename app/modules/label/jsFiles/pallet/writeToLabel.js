const fs = require("fs");

const writeToLabel = (data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(`${process.env.palletFileName}`, data, (err) => {
      if (err) console.log(err);
      else {
        resolve(console.log(`Data appended\n`));
      }
    });
  });
};

module.exports = writeToLabel;
