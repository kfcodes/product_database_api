const firstProduct = require("./firstProduct")

const newLoop = (results) => {
  return new Promise((resolve, reject) => {

  fs.writeFile("product_pallet.zpl", "", function () {
    console.log("The File was emptied");
  });

  results.forEach((element, index, array) => {
    if (index == 0) {
      let data = firstProduct(element);
      writeToLabel(data);
      console.log("First Element");
      console.log(index);
    } else if (
      index == 1 ||
      index == 5 ||
      index == 9 ||
      index == 13 ||
      index == 17 ||
      index == 21
    ) {
      console.log("Third location");
      console.log(index);
      let location = 215;
      let data = blankPalletProductData(element, location);
      writeToLabel(data);
    } else if (
      index == 2 ||
      index == 6 ||
      index == 10 ||
      index == 14 ||
      index == 18 ||
      index == 22
    ) {
      console.log("Fourth location");
      console.log(index);
      let location = 30;
      let data = blankPalletProductData(element, location);
      writeToLabel(data);
    } else if (
      index == 3 ||
      index == 7 ||
      index == 11 ||
      index == 15 ||
      index == 19
    ) {
      console.log("Top location");
      console.log(index);
      let location = 565;
      let data = blankPalletProductData(element, location);
      writeToLabel(data);
    } else if (
      index == 4 ||
      index == 8 ||
      index == 12 ||
      index == 16 ||
      index == 20
    ) {
      let location = 395;
      let data = blankPalletProductData(element, location);
      writeToLabel(data);
      console.log("Second location");
      console.log(index);
    } else {
      console.log("There was an Error");
    }

    if (index == array.length - 1) {
      let data = `^XZ`;
      writeToLabel(data);
      resolve(console.log(`Appended all data to the label`))
      console.log("Got to the last element in the array");
    } else if (
      index == 2 ||
      index == 6 ||
      index == 10 ||
      index == 14 ||
      index == 18
    ) {
      let data = `^XZ^XA`;
      writeToLabel(data);
      console.log(element);
    } else {
      console.log("Not an end Product");
    }
  });
  });
};

module.exports = newLoop;

