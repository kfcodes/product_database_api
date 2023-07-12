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

FinishedProduct.updateFinishedProductById = (id, finishedProduct, result) => {
  sql.query(
    `UPDATE finishedProduct SET 
    ${process.env.finishedProduct_7}="${finishedProduct.process.env.finishedProduct_1}",
    ${process.env.finishedProduct_8}=${finishedProduct.process.env.finishedProduct_2},
    ${process.env.finishedProduct_9}="${finishedProduct.process.env.finishedProduct_3}",
    ${process.env.finishedProduct_10}="${finishedProduct.process.env.finishedProduct_4}",
    ${process.env.finishedProduct_11}=${finishedProduct.process.env.finishedProduct_5}
    WHERE ${process.env.finishedProduct_12}=${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Updated Finished Product: ", { id: id, ...finishedProduct });
      result(null, { id: id, ...finishedProduct });
    }
  );
};

FinishedProduct.findFinishedProductById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.ET} WHERE ${process.env.FP_6}= ?`,
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
