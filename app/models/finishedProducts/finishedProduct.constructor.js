
const FinishedProduct = function (eol) {
  this.product_id = eol.product_id;
  this.po = eol.po;
  this.lot = eol.lot;
  this.bbe = eol.bbe;
  this.quantity = eol.quantity;
};

module.exports = FinishedProduct;
