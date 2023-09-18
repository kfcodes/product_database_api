const GetPalletLabelStructure = () => {
  return new Promise((resolve, reject) => {
    let struct = `
^XA^CFD
^FWR
^LH2,20
^FO670,420^A0,40^FDPallet Weight (Kg)^FS
^FO560,400^GB160,350,5^FS
^FO570,540^GB90,5,5^FS
^FO670,815^A0,40^FDSize^FS
^FO560,760^GB160,180,5^FS
^FO670,980^A0,40^FDHeight (cm)^FS
^FO560,950^GB160,230,5^FS
^FO370,10^GB160,1170,5^FS
^FO450,10^GB5,1170,5^FS
^FO398,20^A0,40^FDLOT:^FS
^FO398,300^A0,40^FDBBE:^FS
^FO398,520^A0,40^FDBATCH:^FS
^FO398,920^A0,40^FDQTY:^FS
`;
    resolve(struct);
  });
};

module.exports = GetPalletLabelStructure;
