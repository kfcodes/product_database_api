const LabelData = (data, qty) => {
  return new Promise((resolve, reject) => {
  let label = `
^FS
^FO550,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.flavour}^FS
^FO500,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.quantity_per_box}^FS
^FO450,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.weight}^FS
^FO400,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.eol_lot}^FS
^FO350,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.eol_bbe}^FS
^FO300,270
^A@90,50,50,E:ARIALB.TTF
^FD${data.eol_batch}^FS
^BY8
^FO70,200^BER,210,Y,N,N,N,N^FD${data.box_barcode}^FS
^XZ
`;
          resolve(label);
});
};

module.exports = LabelData
