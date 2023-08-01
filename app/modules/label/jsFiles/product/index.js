module.exports.CreateProductLabel = async function (data) {
  writeToLabel("outline")
    .then(writeToLabel("data").then(writeToLabel("end")))
    .catch((err) => console.log(err));
};
