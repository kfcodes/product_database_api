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

function splitPdf(pdf) {
  exec(
    `mutool poster -x 2 uploads/${pdf} uploads/${pdf}-split.pdf`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
        return `${pdf}-split`
}

function printFile(pdf) {
  exec(
    `lpr -P ${printer} -o media=Custom.102x150mm uploads/${pdf}.pdf`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
  printBlankLabel();
}

function printBlankLabel() {
  exec(
    `lpr -P ${printer} -o raw blankLabel.zpl`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
}
