const sql = require("../db/dbConnect");
require('dotenv').config();
const FinishedProduct = require("./finishedProduct.constructor.js")


FinishedProduct.createNewFinishedProduct = (eol, result) => {
  sql.query(`INSERT INTO ${process.env.ET} SET ?`, eol, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

FinishedProduct.updateFinishedProductById = (id, eol, result) => {
  sql.query(
    `UPDATE eol SET 
    ${process.env.EOL_7}="${eol.process.env.EOL_1}",
    ${process.env.EOL_8}=${eol.process.env.EOL_2},
    ${process.env.EOL_9}="${eol.process.env.EOL_3}",
    ${process.env.EOL_10}="${eol.process.env.EOL_4}",
    ${process.env.EOL_11}=${eol.process.env.EOL_5}
    WHERE ${process.env.EOL_12}=${id}`,
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
      console.log("updated eol: ", { id: id, ...eol });
      result(null, { id: id, ...eol });
    }
  );
};

FinishedProduct.findFinishedProductById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.ET} WHERE ${process.env.EOL_6}= ?`,
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found FinishedProduct details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = FinishedProduct;
