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

Eol.createNewEol = (eol, result) => {
  sql.query(`INSERT INTO ${process.env.ET} SET ?`, eol, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

Eol.updateEolById = (id, eol, result) => {
  sql.query(
    `UPDATE eol SET 
    ${process.env.EOL_7}="${eol.process.env.EOL_1}",
    ${process.env.EOL_8}=${eol.process.env.EOL_2},
    ${process.env.EOL_9}="${eol.process.env.EOL_3}",
    ${process.env.EOL_10}="${eol.process.env.EOL_4}",
    ${process.env.EOL_11}=${eol.process.env.EOL_5}
    WHERE ${process.env.EOL_12}=${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated eol: ", { id: id, ...eol });
      result(null, { id: id, ...eol });
    }
  );
};

module.exports = Eol;
