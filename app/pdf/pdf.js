const puppetere = require("puppeteer");
const fs = require("fs-extra");
const { default: puppeteer } = require("puppeteer");
const hbs = require("handlebars");
const path = require("path");
// const data = require("./pallet_data.json");
const { exec } = require("child_process");

const list = {
  companyName: "Pallet Check Sheet",
  pallets: [],
};

// async function fetchData() {
//   const response = await fetch('/movies');
//   // waits until the request completes...
//   console.log(response);
// }

// Select Distinct API for each packing list

const compile = async function (templateName, data) {
  const filePath = path.join(
    process.cwd(),
    "/app/pdf/templates",
    `${templateName}.hbs`
  );
  const html = await fs.readFile(filePath, "utf-8");
  return hbs.compile(html)(data);
};

const printPallets = async function() {
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
}

// (async function () {
// module.exports.CreatePdf = async function (data) {
// module.exports.CreatePdf = async function (data) {
async function CreatePdf(data) {
  try {
    list.pallets.push(data);
    // const list.pallets = {...list.pallets , ...data};
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await compile("checkSheet", list);

    // console.log(list.pallets);
    // console.log(list);
    // console.log(data);
    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "/home/m/checkSheet.pdf",
      format: "a4",
      printBackground: true,
      landscape: true,
      margin: {
          top: 30,
          bottom: 30,
          left: 30,
          right: 30,
          }
    });
      // pageRanges: '1',
    console.log("THE PDF WAS MADE");
    await browser.close();
    // printPallets();
    // process.exit();
  } catch (e) {
    console.log("Error: ", e);
  }
}
// }();
// })();

// module.exports.CreateLabel = function (results) {
module.exports.CreatePdf = CreatePdf;
