const HazardsList = () => {
  return new Promise((resolve, reject) => {
    let struct = `
^FO10,10^GB455,1170,5^FS
^FX LINES FOR HAZARDS
^FO370,10^GB5,1170,5^FS
^FO330,10^GB1,1170,1^FS
^FO290,10^GB1,1170,1^FS
^FO250,10^GB1,1170,1^FS
^FO210,10^GB1,1170,1^FS
^FO170,10^GB1,1170,1^FS
^FO130,10^GB1,1170,1^FS
^FO90,10^GB1,1170,1^FS
^FO50,10^GB1,1170,1^FS

^FO400,130^A0,30^FDPRECAUTIONS: ^FS

^FO338,540^GB25,25,2^FS
^FO298,540^GB25,25,2^FS
^FO258,540^GB25,25,2^FS
^FO218,540^GB25,25,2^FS
^FO178,540^GB25,25,2^FS
^FO138,540^GB25,25,2^FS
^FO98,540^GB25,25,2^FS
^FO58,540^GB25,25,2^FS
^FO18,540^GB25,25,2^FS
^FO338,1100^GB25,25,2^FS
^FO298,1100^GB25,25,2^FS
^FO258,1100^GB25,25,2^FS
^FO218,1100^GB25,25,2^FS
^FO178,1100^GB25,25,2^FS
^FO138,1100^GB25,25,2^FS
^FO98,1100^GB25,25,2^FS
^FO58,1100^GB25,25,2^FS
`;
    resolve(struct);
  });
};

module.exports = HazardsList;
