const sql = require("../db/dbConnect");
require('dotenv').config();

exports.getAll = (result) => {
  sql.query(
    `${process.env.FEW}`,
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

exports.getAllFinishedProducts = (result) => {
  sql.query(
    `${process.env.FEW2}`,
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

exports.findById = (id, result) => {
  sql.query(
    `${process.env.FEW3} "${id}"`,
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
