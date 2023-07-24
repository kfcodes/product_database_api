const writeToLabel = (data) => {
  return new Promise((resolve, reject) => {
  fs.appendFile(`${process.env.palletFileName}`, data, (err) => {
    if (err) console.log(err);
    else {
      resolve("File written successfully\n");
    }
  });
  });
}

module.exports = writeToLabel;
