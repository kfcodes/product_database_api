// Product Constructor;
const Product = function (product) {
  this.process.env.PRODUCT_1 = product.process.env.PRODUCT_1;
  this.process.env.PRODUCT_2 = product.process.env.PRODUCT_2;
  this.process.env.PRODUCT_3 = product.process.env.PRODUCT_3;
  this.process.env.PRODUCT_4 = product.process.env.PRODUCT_4;
};

Product.getAll = (result) => {
  sql.query(
    "SELECT product_id, product_description FROM product_database",
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

Product.findById = (productId, result) => {
  sql.query(
    "SELECT * FROM product_info WHERE product_id = ?",
    [productId],
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

Product.getAllBrands = (result) => {
  sql.query("SELECT * FROM brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
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
      result({ kind: "not_found" }, null);
    }
  );
};
