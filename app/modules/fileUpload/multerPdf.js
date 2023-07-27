const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

//Configuration for Multer
// const multerStorage = multer.diskStorage({
//   dest: "uploads/"
// });
  // destination: (req, file, cb) => {
  //   cb(null, "public");
  // },
  // filename: (req, file, cb) => {
  //   const ext = file.mimetype.split("/")[1];
  //   cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  // },
// });
// Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };
// //Calling the "multer" Function
// // module.exports.CreateLabel = async function (results) {
// module.exports.UploadPdf = multer({
//   storage: multerStorage,
//   // fileFilter: multerFilter,
// });

// const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, "test3" + '-' + uniqueSuffix +".pdf")
    cb(null, file.originalname);
  },
});
// Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };
const Upload = multer({
  storage: storage,
});

module.exports = Upload;
