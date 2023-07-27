exports.uploadPdf = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  allFilesData = [];
  req.files.forEach((file) => {
    const fileData = { path: file.path, name: file.filename };
    allFilesData.push(fileData);
  });
  res.send(allFilesData);
};

exports.uploadData = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  allFilesData = [];
  req.files.forEach((file) => {
    const fileData = { path: file.path, name: file.filename };
    allFilesData.push(fileData);
  });
  res.send(allFilesData);
};
