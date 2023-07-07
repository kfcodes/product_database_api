const { exec } = require("child_process");

module.exports.SplitPdf = async function (pdf) {
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
