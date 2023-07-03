const sql = require("./db.js");
require('dotenv').config();

const Eol = function (eol) {
  this.EOL_1 = eol.EOL_1;
  this.EOL_2 = eol.EOL_2;
  this.EOL_3 = eol.EOL_3;
  this.EOL_4 = eol.EOL_4;
  this.EOL_5 = eol.EOL_5;
};


module.exports = { Eol };
