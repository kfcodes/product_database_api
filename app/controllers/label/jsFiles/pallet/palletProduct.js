const PalletProductData = (pallet, location) => {
  let product_data = `
^FO${location - 30},10^GB160,1170,5^FS
^FO${location + 50},10^GB5,1170,5^FS
^FO${location + 70},50^A0,37^FD${pallet.product_description.toUpperCase()}^FS
^FO${location},20^A0,40^FDLOT:^FS
^FO${location},120^A0,35^FD${pallet.lot}^FS
^FO${location},300^A0,40^FDBBE:^FS
^FO${location},400^A0,35^FD${pallet.bbe}^FS
^FO${location},520^A0,40^FDBATCH:^FS
^FO${location},650^A0,35^FD${pallet.batch}^FS
^FO${location},920^A0,40^FDQTY:^FS
^FO${location},1050^A0,35^FD${pallet.quantity}^FS
`;
  return product_data;
};

module.exports = PalletProductData;
