module.exports.LabelData = async function (data, qty) {
  `
^PQ${qty},10,1,Y
^FO710,200^A0,70^FD${data.company}^FS
^FX Product details
^FO650,250^AC,40^FD${data.sku}^FS
^FO600,250^AC,40^FD${data.product}^FS
^FO550,250^AC,40^FD${data.flavour}^FS
^FO500,250^AC,40^FD${data.qty}^FS
^FO450,250^AC,40^FD${data.weight}^FS
^FO400,250^AC,40^FD${data.lot}^FS
^FO350,250^AC,40^FD${data.bbe}^FS
^FO300,250^AC,40^FD${data.batch}^FS
^BY8
^FO120,200^BER,150,Y,N,N,N,N^FD${data.barcode}^FS
`;
};
