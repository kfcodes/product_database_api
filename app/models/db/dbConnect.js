const mysql = require("mysql");
require('dotenv').config();

// Create a connection to the database
const dbConnect = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER1,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

// open the MySQL connection
dbConnect.connect((error) => {
  if (error) throw error;
});

module.exports = dbConnect;
