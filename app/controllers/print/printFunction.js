const { exec } = require("child_process");

const PrintFunction = (printer, settings, file) => {
  return new Promise((resolve, reject) => {
  // exec(
  //   `lpr -P ${printer} ${settings} ${file}`,
  //   (error, stdout, stderr) => {
  //     if (error) {
  //       console.log(`error: ${error.message}`);
  //       return;
  //     }
  //     if (stderr) {
  //       console.log(`stderr: ${stderr}`);
  //       return;
  //     }
  //   }
  // )
  //  resolve(`${file} printed on ${printer}`);
   // resolve(`lpr -P ${printer} ${settings} ${file}`);
   resolve(console.log(`lpr -P ${printer} ${settings} ${file}`));
   });
};

module.exports = PrintFunction;
