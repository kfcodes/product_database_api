// Product Constructor;
const Product = function (product) {
  this.process.env.PRODUCT_1 = product.process.env.PRODUCT_1;
  this.process.env.PRODUCT_2 = product.process.env.PRODUCT_2;
  this.process.env.PRODUCT_3 = product.process.env.PRODUCT_3;
  this.process.env.PRODUCT_4 = product.process.env.PRODUCT_4;
};

Product.getAll = (result) => {
  sql.query(
    `SELECT ${process.env.PRODUCT_1}, ${process.env.PRODUCT_2} FROM ${process.env.PD}`,
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


Product.findById = (pid, result) => {
  sql.query(
    `SELECT * FROM ${process.env.PI} WHERE ${process.env.1} = ?`,
    [pid],
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
      result({ kind: "not_found" }, null);
    }
  );
};

Product.getAllBrands = (result) => {
  sql.query(`SELECT * FROM ${process.env.B}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Have brands: ", res);
    result(null, res);
  });
};

Product.productsFromBrand = (bid, result) => {
  sql.query(
    `SELECT * FROM ${process.env.PD} WHERE ${process.env.1} LIKE "${bid}%"`,
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
Product.findBomById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.BCD} WHERE ${Pprocess.env.PRODUCT_5}= ?`,
    [id],
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
      result({ kind: "not_found" }, null);
    }
  );
};

Product.findPalletById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.PAI} WHERE ${process.env.PALLET1}= ?`,
    [id],
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

Product.findPalletByBrand = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.BID} LIKE ${id}%`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Pallets: ", res);
      result(null, res);
    }
  );
};

Product.printPalletLabel = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.PALLET_1}= ${id} AND ${process.env.PALLETITEM_3} IS NOT null;`, (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      result(null);
      return;
    }
  );
};

Product.getRecentPallets = (result) => {
  sql.query(
    `SELECT * FROM test_view_2 ORDER by ${process.env.PALLET_1} Desc LIMIT 20`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.newGetRecentPallets = (result) => {
  sql.query(
    `SELECT * FROM test_view_2 ORDER by ${process.env.PALLET_1} Desc LIMIT 20`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.getLatestPallets = (result) => {
  sql.query(`SELECT * FROM ${process.env.MPAI} ORDER BY ${process.env.PALLET_1} DESC LIMIT 20 `, (err, res) => {
    if (err) {
      console.log(`error: `, err);
      result(null, err);
      return;
    }
    result(null, res);
    return res;
  });
};


module.exports = Product;
