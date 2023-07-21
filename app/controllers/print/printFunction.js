const { exec } = require("child_process");

const PrintFunction = (printer, settings, file) => {
  return new Promise((resolve, reject) => {
  exec(
    `lpr -P ${printer} ${settings} ${file}`,
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
  )
   resolve(`${file} printed on ${printer}`);
   });
};

module.exports = PrintFunction;
