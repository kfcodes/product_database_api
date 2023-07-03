const sql = require("./db.js");
require('dotenv').config();

const Eol = function (eol) {
  this.EOL_1 = eol.EOL_1;
  this.EOL_2 = eol.EOL_2;
  this.EOL_3 = eol.EOL_3;
  this.EOL_4 = eol.EOL_4;
  this.EOL_5 = eol.EOL_5;
};

Eol.findEolById = (id, result) => {
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
        console.log("found Eol details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Eol.createNewEol = (Eol, result) => {
  sql.query(`INSERT INTO ${process.env.ET} SET ?`, Eol, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};


module.exports = { Eol };
