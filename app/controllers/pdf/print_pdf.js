const { exec } = require("child_process");

const printPdf = async function() {
  await exec(
    "lpr -P HP_ColorLaserJet_MFP_M278-M281 /home/m/checkSheet.pdf",
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
 console.log("The pallet list was Printed");
};

module.exports.PrintPdf = printPdf;
