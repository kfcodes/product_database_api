const newLoop = require("./palletProductsLoop")
const emptyFile = require("./emptyFile")
const {printLargeLabel} = require("../../../print/printZplLabel")

module.exports.CreateLabel = async function (results) {
emptyFile.then(() => {
   newLoop(results).then(()=>{
   // printLargeLabel();
  console.log("The label is ready to print");
   })
   })
};
