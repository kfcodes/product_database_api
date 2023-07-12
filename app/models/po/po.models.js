const dbConnect = require("../db/dbConnect.js");
const Po = require("./po.constructor.js")

Po.createNewPo = async (po, result) => {
  dbConnect.query(`INSERT INTO ${process.env.P} SET ?`, po, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = Po;
