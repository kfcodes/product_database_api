const fs = require('fs');

module.exports.CreateLabel = function(results) {
let productData = (`
^XA^CFD
^FWR
^LH2,20
^FO380,200^A0,350^FDTEST^FS
^FO290,20^A0,85^FDTEST^FS
^FO190,20^A0,85^FDTEST^FS
^FO90,20^A0,85^FDTEST^FS
^XZ
`)

fs.writeFile("internal_product.zpl", productData, (err) => {
if (err)
console.log(err);
else {
console.log("File written successfully\n");
};
