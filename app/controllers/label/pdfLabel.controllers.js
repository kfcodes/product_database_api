exports.printPdf = (req, res) => {
  printPdf.PrintPdf(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `There is no PDF ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving PDF ${req.params.id}`,
        });
      }
    } else res.send({ message: `Printing ${req.params.id}` });
  });
};
