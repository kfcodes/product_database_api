const sql = require("../db/dbConnect");
require('dotenv').config();
const FinishedProduct = require("./finishedProduct.constructor.js")

FinishedProduct.createNewFinishedProduct = (finishedProduct, result) => {
  sql.query(`INSERT INTO ${process.env.ET} SET ?`, finishedProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

FinishedProduct.findFinishedProductById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.ET} WHERE ${process.env.FINISHEDPRODUCT_6}= ?`,
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Finished Product with details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = FinishedProduct;
