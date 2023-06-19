function firstProduct(p) {
  let firstPalletProduct = `
^XA^CFD
^FWR
^LH2,20
^PQ2,10,1,Y
^FX Code 128 Barcode That will be in the top left of the label this will encode the id of the pallet
^FO580,50
^BQN,2,8,Q
^FDQA,
${p.pallet_id}
-
${p.production_date}
^FS
^FX This puts the pallet Number at the top of the label
^FO720,400
^A0R,80,80
^FD
Pallet No. ${p.pallet_id}
^FS

^FX Box for the weight of the pallet with the label above the box
^FO590,600^A0,60^FD${p.weight}^FS
^FO590,440^A0,60^FD${p.empty_weight}^FS

^FX Box for the Type of the pallet with the label above the box
^FO575,820^^A0,80^FD${p.pallet_type_letter}^FS

^FX Box for the height of the pallet with the label above the box
^FO590,1020^A0,60^FD${p.height}^FS

^FO470,50^A0,37^FD
${p.product_description.toUpperCase()}
^FS
^FO398,120^A0,35^FD${p.lot}^FS
^FO398,400^A0,35^FD${p.bbe}^FS
^FO398,650^A0,35^FD${p.batch}^FS
^FO398,1050^A0,35^FD${p.quantity}^FS
`;
  return firstPalletProduct;
}
