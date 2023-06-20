module.exports.writeToFile = async function (file, data) {
  fs.appendFile(`${file}.zpl`, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}
