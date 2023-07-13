const sql = require("../db/dbConnect.js");
const Pallet = require("./pallet.constructor.js")

Pallet.createNewPallet = (result) => {
  sql.query(
    `INSERT INTO ${process.env.PAI}(${process.env.PAT}, ${process.env.PL}) VALUES(1, 1)`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      sql.query(`SELECT ${process.env.L}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, { ...res[0] });
      });
    }
  );
};

Pallet.updatePalletById = (id, pallet, result) => {
  sql.query(
    `UPDATE ${process.env.PAI} SET ? WHERE ${process.env.PALLET_1}= "${id}"`, pallet, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Pallet: ", { id: id, ...pallet });
      result(null, { id: id, ...pallet });
    }
  );
};

module.exports = Pallet;
