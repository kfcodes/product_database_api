const PalletItem = function (palletItem) {
  this.item_id = palletItem.item_id;
  this.pallet_item_pallet_id = palletItem.pallet_item_pallet_id;
  this.pallet_item_product_id = palletItem.pallet_item_product_id;
  this.lot = palletItem.lot;
  this.bbe = palletItem.bbe;
  this.batch = palletItem.batch;
  this.quantity = palletItem.quantity;
};

module.exports = PalletItem;
