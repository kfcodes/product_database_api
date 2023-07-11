const sql = require("../db/dbConnect.js");
require('dotenv').config();
const PalletItem = require("./palletItem.constructor.js");

PalletItem.createNewPalletItem = (newItem, result) => {
  sql.query(`INSERT INTO pallet_item SET ?`, newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created pallet item: ", { ...newItem });
    result(null, { ...newItem });
  });
};

PalletItem.remove = (id, result) => {
  sql.query(`DELETE FROM ${process.env.PIT} WHERE ${process.env.PALLETITEM_1} = ?`, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Pallet item with id: ", id);
    result(null, res);
  });
};

PalletItem.updatePalletItemById = (id, pallet_item, result) => {
  sql.query(
    `UPDATE pallet_item SET 
    WHERE item_id=${id}`,
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
      console.log("updated pallet Item: ", { id: id, ...pallet_item });
      result(null, { id: id, ...pallet_item });
    }
  );
};

module.exports = PalletItem;
