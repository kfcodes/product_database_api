const sql = require("../db/dbConnect.js");

exports.palletInfo = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.T_1} WHERE ${process.env.T_2} > ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};
