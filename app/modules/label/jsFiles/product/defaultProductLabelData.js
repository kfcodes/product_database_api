const LabelData = (data, qty) => {
  return new Promise((resolve, reject) => {
  let label = `
^PQ${qty},10,1,Y
^FO700,250
^A0,90
^FD${data.brand}^FS
^FO650,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.sku}^FS
^FO600,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.product}^FS
^FO550,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.flavour}^FS
^FO500,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.quantity_per_box}^FS
^FO450,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.weight}^FS
^FO400,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.eol_lot}^FS
^FO350,320
^A@90,50,50,E:ARIALB.TTF
^FD${data.eol_bbe}^FS
^FO300,320
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
