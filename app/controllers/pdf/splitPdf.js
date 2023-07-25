const { exec } = require("child_process");

module.exports.SplitPdf = function (pdf) {
  return new Promise((resolve, reject) => {
    exec(
      `${process.env.pdfSplitCommand}${process.env.pdfLocation}${pdf} ${process.env.pdfLocation}${pdf}-split.pdf`,
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
    resolve(`${process.env.pdfLocation}${pdf}-split.pdf`);
  });
};
