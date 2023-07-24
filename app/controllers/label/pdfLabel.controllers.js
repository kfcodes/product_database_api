const { PrintPdf } = require("../pdf/index");

exports.printPdf = (req, res) => {
  PrintPdf(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `There is no ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving ${req.params.id}`,
        });
      }
    } else res.send({ message: `Printing ${req.params.id}` });
  });
};
