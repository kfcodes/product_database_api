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


modules.export = {PalletItem}
