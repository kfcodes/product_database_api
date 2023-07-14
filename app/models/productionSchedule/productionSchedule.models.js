const sql = require("../db/dbConnect.js");

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

