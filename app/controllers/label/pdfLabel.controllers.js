const { ModifyPrintPdf } = require("../../modules/pdf/index");

exports.printPdf = (req, res) => {
  ModifyPrintPdf(req.params.id, (err) => {
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
