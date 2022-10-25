const sql = require("./db.js");

// constructor;
const Product = function (product) {
  this.product_id = product.product_id;
  this.product_description = product.product_description;
  this.commodity_code = product.commodity_code;
  this.stock = product.stock;
};

Product.getAll = (result) => {
  sql.query("SELECT * FROM product_database", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.findByBrand = (brandId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE product_id LIKE "%${brandId}%"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("products: ", res);
      result(null, res);
    }
  );
};

module.exports = Product;
