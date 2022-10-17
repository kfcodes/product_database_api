const sql = require("./db.js");

// constructor;
const Brand = function (brand) {
  this.prefix = brand.prefix;
  this.name = brand.name;
};

Brand.create = (newBrand, result) => {
  sql.query("INSERT INTO brand SET ?", newBrand, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created brand: ", { id: res.insertId, ...newBrand });
    result(null, { id: res.insertId, ...newBrand });
  });
};

Brand.findById = (brandId, result) => {
  sql.query(`SELECT * FROM brand WHERE id = ${brandId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found brand: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found brand with the id
    result({ kind: "not_found" }, null);
  });
};

Brand.getAll = (result) => {
  sql.query("SELECT * FROM brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("brands: ", res);
    result(null, res);
  });
};

module.exports = Brand;
