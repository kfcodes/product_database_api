const GetCombinedPalletLabelStructure = () => {
  return new Promise((resolve, reject) => {
    let labelStructure = `^XA^CFD
^FWR
^LH20,20
^FO630,220^A0,100^FDCOMBINED PALLET^FS

^FO520,480^A0,60^FDPALLETS^FS
^FO250,10^GB360,1170,5^FS

^FO90,30^A0,55^FDGROSS^FS
^FO30,30^A0,55^FDWEIGHT^FS
^FO65,450^A0,60^FDKG^FS
^FO10,10^GB180,530,5^FS

^FO100,620^A0,60^FDGROSS^FS
^FO30,620^A0,60^FDHEIGHT^FS
^FO65,1060^A0,60^FDCM^FS
^FO10,580^GB180,580,5^FS`;
    resolve(labelStructure);
  });
};

module.exports = GetCombinedPalletLabelStructure;
