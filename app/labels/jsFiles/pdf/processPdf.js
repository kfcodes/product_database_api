const fs = require("fs");
const { exec } = require("child_process");

module.exports.PrintPdf = async function (pdfname, result) {
  const splitfile = splitPdf(pdfname);
  console.log("The File was Split");
  console.log(splitfile);
  printFile(splitfile);
  result(null);
  return;
};
