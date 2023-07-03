const sql = require("./db.js");
require('dotenv').config();

//Pallet Item Constructor;
const PalletItem = function (palletItem) {
  this.PALLETITEM_1 = palletItem.PALLETITEM_1;
  this.PALLETITEM_2 = palletItem.PALLETITEM_2;
  this.PALLETITEM_3 = palletItem.PALLETITEM_3;
  this.PALLETITEM_4 = palletItem.PALLETITEM_4;
  this.PALLETITEM_4 = palletItem.PALLETITEM_4;
  this.PALLETITEM_4 = palletItem.PALLETITEM_4;
  this.PALLETITEM_4 = palletItem.PALLETITEM_4;
};

PalletItem.createNewPalletItem = (newItem, result) => {
  sql.query(`INSERT INTO ${process.env.PIT} SET ?`, newItem, (err, res) => {
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
    ${process.env.PALLETITEM_1}=${pallet_item.${process.env.PALLETITEM_1}},
    ${process.env.PALLETITEM_2}=${pallet_item.${process.env.PALLETITEM_2}},
    ${process.env.PALLETITEM_3}="${pallet_item.${process.env.PALLETITEM_3}}",
    ${process.env.PALLETITEM_4}="${pallet_item.${process.env.PALLETITEM_4}}",
    ${process.env.PALLETITEM_5}="${pallet_item.${process.env.PALLETITEM_5}}",
    ${process.env.PALLETITEM_6}="${pallet_item.${process.env.PALLETITEM_6}}",
    ${process.env.PALLETITEM_7}=${pallet_item.${process.env.PALLETITEM_7}}
    WHERE ${process.env.PALLETITEM_1}=${id}`,
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
      console.log("updated pallet Item: ", { ...pallet_item });
      result(null, { ...pallet_item });
    }
  );
};

modules.export = {PalletItem}
