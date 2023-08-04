const combinedPalletData = (data) => {
  return new Promise((resolve, reject) => {
    let palletData = `^FO50,260^A0,80^FD${data.weight}^FS
^FO50,860^A0,80^FD${data.height}^FS
^FO350,80^A0,70^FD ${data.pallets}^FS
^XZ`;
    resolve(palletData);
  });
};

module.exports = combinedPalletData;
