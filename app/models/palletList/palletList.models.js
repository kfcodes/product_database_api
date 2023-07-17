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
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

exports.getPackingListData = (result) => {
  sql.query(
    `select ${process.env.P33} from ${process.env.PPP} ${process.env.P44}`,
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

exports.getCompanyPallets = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.TSXX}"${id}%"`,
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