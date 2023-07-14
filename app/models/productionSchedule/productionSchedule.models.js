const sql = require("../db/dbConnect.js");

exports.getCurrentProduction = (result) => {
  sql.query(
    `SELECT * FROM ${process.env.PVV} where ${process.env.tt} IS NOT NULL ORDER by ${process.env.oo} ${process.env.order}`,
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

exports.getAllProduction = (result) => {
  sql.query(`SELECT * FROM ${process.env.PV}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

