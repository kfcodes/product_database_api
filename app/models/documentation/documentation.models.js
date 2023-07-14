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

exports.productsFromBrand = (Id, result) => {
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

