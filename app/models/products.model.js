const sql = require("./db.js");

// constructor;
const Product = function (product) {
  this.product_id = product.product_id;
  this.product_description = product.product_description;
  this.commodity_code = product.commodity_code;
  this.stock = product.stock;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
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
    `SELECT * FROM product_database WHERE id LIKE ${brandId}`,
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

Product.findById = (productId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE id = ${productId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found product with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE product SET designation = ?, doj = ?, name = ?, salary = ? WHERE id = ?",
    [product.designation, product.doj, product.name, product.salary, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM product_database WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = (result) => {
  sql.query("DELETE FROM product_database", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

module.exports = Product;
