const writeToLabel = (pallet) => {
  return new Promise((resolve, reject) => {
  fs.appendFile("product_pallet.zpl", pallet, (err) => {
    if (err) console.log(err);
    else {
      resolve("File written successfully\n");
    }
  });
  });
}

module.exports = writeToLabel;
