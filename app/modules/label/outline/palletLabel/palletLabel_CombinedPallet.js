const GetCombinedPalletLabelStructure = () => {
  return new Promise((resolve, reject) => {
    let labelStructure = `
      ^XA^CFD
      ^FWR
      ^LH2,20

      ^FO650,250^A0,90^FDCOMBINED PALLET^FS

      ^FO320,10^GB300,1170,5^FS
      ^FO550,500^A0,40^FDPALLETS^FS

      ^FO90,20^A0,55^FDGROSS:^FS
      ^FO30,20^A0,55^FDWEIGHT:^FS
      ^FO65,450^A0,60^FDKG^FS
      ^FO10,10^GB180,530,5^FS

      ^FO100,620^A0,60^FDGROSS^FS
      ^FO30,620^A0,60^FDHEIGHT:^FS
      ^FO65,1060^A0,60^FDCM^FS
      ^FO10,580^GB180,580,5^FS
      `;

    resolve(labelStructure);
  });
};

module.exports = GetCombinedPalletLabelStructure;
