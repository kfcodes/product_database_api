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

module.exports = Pallet;
