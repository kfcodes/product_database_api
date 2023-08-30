const productLabel = () => {
  return new Promise((resolve, reject) => {
    let product = `
^XA^CFD
^FWR
^LH2,20
^FO650,110^A0,50^FDSKU:^FS
^FO600,20^A0,50^FDPRODUCT:^FS
^FO550,20^A0,50^FDFLAVOUR:^FS
^FO500,110^A0,50^FDQTY:^FS
^FO450,100^A0,50^FDSIZE:^FS
^FO400,110^A0,50^FDLOT:^FS
^FO350,110^A0,50^FDBBE:^FS
^FO300,60^A0,50^FDBATCH:^FS
`;
    resolve(product);
  });
};
module.exports = productLabel;
