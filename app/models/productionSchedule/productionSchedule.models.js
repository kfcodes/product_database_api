const sql = require("../db/dbConnect.js");

exports.getCurrentProduction = (result) => {
  sql.query(
    `${process.env.PVV}`,
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

exports.getproductionForId = (id, result) => {
  sql.query(`${process.env.PV2}"%${id}%"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

exports.getproductionRecordById = (id, result) => {
  sql.query(`${process.env.PV3}"%${id}%"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};
