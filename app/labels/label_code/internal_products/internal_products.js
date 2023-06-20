const fs = require('fs');

module.exports.CreateLabel = function(results) {
let productData = (`
^XA^CFD
^FWR
^LH2,20

^FO380,200^A0,350^FD${results.productCode}^FS
^FO290,20^A0,85^FD${results.line1}^FS
^FO190,20^A0,85^FD${results.line2}^FS
^FO90,20^A0,85^FD${results.line3}^FS

^XZ
`)

fs.writeFile("internal_product.zpl", productData, (err) => {
if (err)
console.log(err);
else {
console.log("File written successfully\n");
};
