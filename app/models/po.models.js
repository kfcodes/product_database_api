const sql = require("./db.js");
require('dotenv').config();

// PO Constructor;
const Po = function (po) {
  this.process.env.PO_1 = po.process.env.PO_1;
  this.process.env.PO_2 = po.process.env.PO_2;
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

module.exports = { Po };
