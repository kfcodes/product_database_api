require('dotenv').config();

// module.exports = {
//   HOST: "127.0.0.1",
//   USER: "root",
//   PORT: "3306",
//   PASSWORD: "root_password",
//   DB: "bible",
// };

// USER: `${process.env.USER}`,
module.exports = {
  HOST: `${process.env.HOST}`,
USER: `${process.env.USER1}`,
  PORT: `${process.env.PORT}`,
  PASSWORD: `${process.env.PASSWORD}`,
  DB: `${process.env.DB}`,
};

// module.exports = {
//   HOST: `${process.env.HOST}`,
//   USER: `${process.env.USER}`,
//   PORT: `${process.env.PORT}`,
//   PASSWORD: `${process.env.PASSWORD}`,
//   DB: `${process.env.DB}`,
// };

// module.exports = {
//   HOST: process.env.HOST,
//   USER: process.env.USER,
//   PORT: process.env.PORT,
//   PASSWORD: process.env.PASSWORD,
//   DB: process.env.DB
// };
