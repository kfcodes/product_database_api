const sql = require("../db/dbConnect.js");

exports.getAllBrands = (result) => {
  sql.query(`SELECT * FROM ${process.env.B}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

exports.productsByBrand = (Id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.p} WHERE ${process.env.FP_1} LIKE "${Id}%"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

exports.getProductComponents = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.BC} WHERE ${process.env.BI}="${id}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};
