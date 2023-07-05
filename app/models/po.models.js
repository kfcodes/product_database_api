const sql = require("./db.js");

const Po = function (po) {
  this.po_id = po.po_id;
  this.customer_po_id = po.customer_po_id;
};

Po.createNewPo = async (po, result) => {
  sql.query("INSERT INTO po SET ?", po, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = Po;
