const { exec } = require("child_process");

module.exports.PrintBlankLabel = async function () {
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
