const productLabel = () => {
  return new Promise((resolve, reject) => {
    let product = `
^XA^CFD
^FWR
^LH2,20
^FO650,110
^A0,50
^A@90,50,50,E:ARIALBLB.TTF
^FD
SKU:
^FS
^FO600,20
^A@90,50,50,E:ARIALBLB.TTF
^FD
PRODUCT:
^FS
^FO550,20
^A@90,50,50,E:ARIALBLB.TTF
^FD
FLAVOUR:
^FS
^FO500,110
^A@90,50,50,E:ARIALBLB.TTF
^FD
QTY:
^FS
^FO450,100
^A@90,50,50,E:ARIALBLB.TTF
^FD
SIZE:
^FS
^FO400,110
^A@90,50,50,E:ARIALBLB.TTF
^FD
LOT:
^FS
^FO350,110
^A@90,50,50,E:ARIALBLB.TTF
^FD
BBE:
^FS
^FO300,60^A0,50^FDBATCH:^FS
`;
    resolve(product);
  });
};
module.exports = productLabel;
