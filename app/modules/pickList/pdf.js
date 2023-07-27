const compile = require("./compilePdf");
const { default: puppeteer } = require("puppeteer");

const list = {
  companyName: "Pallet Check Sheet",
  pallets: [],
};

async function CreatePdf(data) {
  try {
    list.pallets.push(data);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await compile("checkSheet", list);
    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "./checkSheet.pdf",
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
    await browser.close();
  } catch (e) {
    console.log("Error: ", e);
  }
}
module.exports.CreatePdf = CreatePdf;
