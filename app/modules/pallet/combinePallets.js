const combinePallets = (pallets) => {
  return new Promise((resolve, reject) => {
    let palletString = "";
    let combinedId = 999999;
    for (let i = 0; i < pallets.length; i++) {
      if (pallets[i] < combinedId) {
        combinedId = pallets[i];
        if (i == pallets.length - 1) {
          palletString += `"${pallets[i]}"`;
        } else {
          palletString += `"${pallets[i]}", `;
        }
      }
    }
    resolve({ id: combinedId, pallets: `( ${palletString} )` });
  });
};

module.exports = combinePallets;
