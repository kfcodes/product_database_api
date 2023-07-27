const compile = require("./compilePdf");
const { default: puppeteer } = require("puppeteer");
const { PrintCheckSheet } = require("../print/printCheckSheet");

const list = {
  companyName: "test",
  pallets: [],
};

const CreatePdf = async (data) => {
  try {
    list.pallets.push(data);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await compile("picklist", list);
    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: `${process.env.PLPATH}`,
      format: "a4",
      printBackground: true,
      landscape: true,
      margin: { top: 30, bottom: 30, left: 30, right: 30 },
    });
    await browser.close();
  PrintCheckSheet(`${process.env.PLPATH}`);
  } catch (e) {
    console.log("Error: ", e);
  }
};

module.exports = CreatePdf;
