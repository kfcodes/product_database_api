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

