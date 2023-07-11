const sql = require("./db.js");
require('dotenv').config();
const Eol = require("./finishedProduct.constructor.js")

// const Eol = function (eol) { this.product_id = eol.product_id; this.po = eol.po; this.lot = eol.lot; this.bbe = eol.bbe; this.quantity = eol.quantity; };

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
