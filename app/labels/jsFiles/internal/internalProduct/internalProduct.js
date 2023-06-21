const fs = require('fs');

const getRowText = async (text) => {
	if (text.length < 30){
console.log(text);
console.log("text is less than 30");
	}

}


module.exports.CreateLabel = function(results) {



let productData = (`
^XA^CFD
^FWR
^LH2,20

^FO380,200^A0,350^FD${results.product}^FS
^FO290,20^A0,85^FD${results.textLine1}^FS
^FO190,20^A0,85^FD${results.textLine2}^FS
^FO90,20^A0,85^FD${results.textLine3}^FS

^XZ
`)
}
