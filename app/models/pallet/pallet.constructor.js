// constructor;
const Pallet = function (pallet) {
  this.empty_weight = pallet.empty_weight;
  this.weight = pallet.weight;
  this.height = pallet.height;
  this.pallet_type = pallet.pallet_type;
  this.packing_list = pallet.packing_list;
};

module.exports = Pallet;
