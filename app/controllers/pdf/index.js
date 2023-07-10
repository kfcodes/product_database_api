const { SplitPdf } = require("./splitPdf.js")

module.exports.PrintPdf = async function (pdfname, result) {
  const splitfile = SplitPdf(pdfname);
  console.log("The File was Split");
  printFile(splitfile);
  result(null);
  return;
};
