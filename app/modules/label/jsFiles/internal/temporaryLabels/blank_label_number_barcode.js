const fs = require("fs");

let startNumber = 1;
let finishNumber = 100;

// create a stream
const stream = fs.createWriteStream("temp_label.zpl", { flags: "a" });

for (let number = startNumber; number < finishNumber + 1; number++) {
  stream.write(`^XA
^FX Code 128 Barcode That will be in the top left of the label this will encode the id of the pallet
^FO580,50
^BCR,180,Y,N,N,N,N
^FV
${number}
^FS
^FX This puts the pallet Number at the top of the label
^FO720,400
^A0R,80,80
^FV
Pallet No. ${number}
^FS
^MCN^XZ`);
}

stream.write(`^MCY^XZ`);
stream.end();
