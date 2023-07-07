const sql = require("./db.js");
require('dotenv').config();

const PalletItem = function (palletItem) {
  this.item_id = palletItem.item_id;
  this.pallet_item_pallet_id = palletItem.pallet_item_pallet_id;
  this.pallet_item_product_id = palletItem.pallet_item_product_id;
  this.lot = palletItem.lot;
  this.bbe = palletItem.bbe;
  this.batch = palletItem.batch;
  this.quantity = palletItem.quantity;
};

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


module.exports = PalletItem;
