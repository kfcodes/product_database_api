const RemoveDuplicatValues = (pallets) => {
  return new Promise((resolve, reject) => {
    let previousPallet = 0;
    pallets.forEach((item) => {
      if (item.PALLET == previousPallet) {
        item.WEIGHT = null;
        item.DIMENSIONS = null;
        item.PALLET = null;
      } else {
        previousPallet = item.PALLET;
      }
    });
    resolve(pallets);
  });
};

module.exports = RemoveDuplicatValues;
