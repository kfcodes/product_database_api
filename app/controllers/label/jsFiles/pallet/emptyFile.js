const emptyFile = () => {
  return new Promise((resolve, reject) => {
  fs.writeFile(`${process.env.palletFileName}`, "", function () {
    resolve("The File was emptied");
  });

module.exports = emptyFile;
