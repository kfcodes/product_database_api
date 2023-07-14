const sql = require("../db/dbConnect.js");

exports.getPalletLabelData = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.Z_1} WHERE ${process.env.Z_2}= ${id} ${process.env.Z_3};`,
    (err, res) => {
      if (err) {
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

exports.printBoxLabel = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.Z_4} WHERE ${process.env.Z_5}= ${id}`,
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
