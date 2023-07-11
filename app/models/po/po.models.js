const {dbConnect} = require("../db/dbConnect.js");
const Po = requre("./po.constructor.js")

Po.createNewPo = async (po, result) => {
  dbConnect.query("INSERT INTO po SET ?", po, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = Po;
