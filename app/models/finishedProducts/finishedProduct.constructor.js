const FinishedProduct = function (eol) {
  this.eol_product_id = eol.product_id;
  this.eol_po = eol.po;
  this.eol_lot = eol.lot;
  this.eol_bbe = eol.bbe;
  this.eol_quantity = eol.quantity;
};

module.exports = FinishedProduct;
