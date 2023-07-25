const firstProduct = (p) => {
  let firstPalletProduct = `
^PQ2,10,1,Y ^FO580,50 ^BQN,2,8,Q
^FDQA, ${p.pallet_id} - ${p.production_date} ^FS
^FO720,400 ^A0R,80,80 ^FD Pallet No. ${p.pallet_id} ^FS
^FO590,600^A0,60^FD${p.weight}^FS
^FO590,440^A0,60^FD${p.empty_weight}^FS
^FO575,820^^A0,80^FD${p.pallet_type_letter}^FS
^FO590,1020^A0,60^FD${p.height}^FS
^FO470,50^A0,37^FD ${p.product_description.toUpperCase()} ^FS
^FO398,120^A0,35^FD${p.lot}^FS
^FO398,400^A0,35^FD${p.bbe}^FS
^FO398,650^A0,35^FD${p.batch}^FS
^FO398,1050^A0,35^FD${p.quantity}^FS
`;
  return firstPalletProduct;
}

module.exports = firstProduct;
