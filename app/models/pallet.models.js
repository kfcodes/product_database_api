const sql = require("./db.js");
require('dotenv').config();

// Pallet Constructor;
const Pallet = function (pallet) {
  this.PALLET_1 = pallet.PALLET_1;
  this.PALLET_2 = pallet.PALLET_2;
  this.PALLET_3 = pallet.PALLET_3;
  this.PALLET_4 = pallet.PALLET_4;
  this.PALLET_5 = pallet.PALLET_5;
  this.PALLET_6 = pallet.PALLET_6;
};

module.exports = Pallet;
