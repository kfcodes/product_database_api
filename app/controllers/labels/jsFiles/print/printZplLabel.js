const { exec } = require("child_process");

module.exports.printLabel = async function (printer,file) {
  exec(
    `lpr -P ${printer} -o raw ${file}.zpl`,
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
  console.log("The Label was Printed");
}
