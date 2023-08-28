const LabelData = (data, qty) => {
  return new Promise((resolve, reject) => {
  let label = `
^PQ${qty},10,1,Y
^FO710,200^A0,70^FD${data.brand}^FS
^FX Product details
^FO650,250^AC,40^FD${data.sku}^FS
^FO600,250^AC,40^FD${data.product}^FS
^FO550,250^AC,40^FD${data.flavour}^FS
^FO500,250^AC,40^FD${data.quantity_per_box}^FS
^FO450,250^AC,40^FD${data.weight}^FS
^FO400,250^AC,40^FD${data.eol_lot}^FS
^FO350,250^AC,40^FD${data.eol_bbe}^FS
^FO300,250^AC,40^FD${data.eol_batch}^FS
^BY8
^FO120,200^BER,150,Y,N,N,N,N^FD${data.box_barcode}^FS
^XZ
`;
          resolve(label);
});
};

module.exports = LabelData
