const sql = require("./db.js");

// constructor;
const Product = function (product) {
  this.product_id = product.product_id;
  this.product_description = product.product_description;
  this.commodity_code = product.commodity_code;
  this.stock = product.stock;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product_database SET ?", newProduct, (err, res) => {
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

Product.findById = (productId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE product_id = ${productId}`,
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

Product.getAllBrands = (result) => {
  sql.query("SELECT * FROM brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("brands: ", res);
    console.log("Have brands: ", res);
    result(null, res);
  });
};

Product.productsFromBrand = (brandId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE product_id LIKE "${brandId}%"`,
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

Product.getAllFinishedProducts = (result) => {
  sql.query(
    "SELECT product_id, product_description FROM product_database where product_id rlike '^[a-z]'  AND product_description NOT LIKE 'do not use%';",
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

Product.findBomById = (productId, result) => {
  sql.query(
    "SELECT * FROM bom_component_data WHERE bom_product_id= ?",
    [productId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found components: ", res);
        result(null, res);
        return;
      }
      // not found product with the id
      result({ kind: "not_found" }, null);
    }
  );
};
Product.findPalletById = (palletid, result) => {
  sql.query(
    "SELECT * FROM pallet_info WHERE pallet_id= ?",
    [palletid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      // not found product with the id
      result({ kind: "not_found" }, null);
    }
  );
};
Product.getRecentPallets = (result) => {
  sql.query(
    "SELECT * FROM test_view_2 ORDER by pallet_id Desc LIMIT 20",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("These are the pallets in the db: ", res);
      result(null, res);
    }
  );
};
module.exports = Product;
