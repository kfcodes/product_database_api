
module.exports.PrintPdf = async function (pdfname, result) {
  const splitfile = splitPdf(pdfname);
  console.log("The File was Split");
  printFile(splitfile);
  result(null);
  return;
};
