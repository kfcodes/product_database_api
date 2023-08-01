const fs = require("fs-extra");
const hbs = require("handlebars");
const path = require("path");

async function Compile(templateName, data) {
  const filePath = path.join(
    process.cwd(),
    "./app/modules/pickList/templates",
    `${templateName}.hbs`
  );
  const html = await fs.readFile(filePath, "utf-8");
  return hbs.compile(html)(data);
}

module.exports = Compile;
