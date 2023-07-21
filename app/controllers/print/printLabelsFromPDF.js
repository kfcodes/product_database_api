const { exec } = require("child_process");

module.exports.PrintPdf = async function (printer, pdf) {
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
}
