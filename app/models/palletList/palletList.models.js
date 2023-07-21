const sql = require("../db/dbConnect.js");

exports.getInfo = (id, result) => {
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

exports.getPalletListData = async(result) => {
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

exports.getLatestPallets = (result) => {
  sql.query(`${process.env.GGH}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
    return res;
  });
};

exports.getLatestPalletProducts = async (id, result) => {
  sql.query(
    `${process.env.DDT1}${id}${process.env.DDT2}`,
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

exports.getRecentPallets = (result) => {
  sql.query(
    `${process.env.HH}`,
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

exports.getLatestData = (result) => {
  sql.query(
    `${process.env.YY}`,
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

exports.getPalletData = (result) => {
  sql.query(
    `${process.env.YY2}`,
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
