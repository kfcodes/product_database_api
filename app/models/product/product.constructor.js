// Product Constructor;
const Product = function (product) {
  this.process.env.PRODUCT_1 = product.process.env.PRODUCT_1;
  this.process.env.PRODUCT_2 = product.process.env.PRODUCT_2;
  this.process.env.PRODUCT_3 = product.process.env.PRODUCT_3;
  this.process.env.PRODUCT_4 = product.process.env.PRODUCT_4;
};

module.exports = Product;
