const {PrintBlankLabel} = require("../../modules/print/blanklabel");

exports.printBlankLabels = (req, res) => {
  PrintBlankLabel((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't Print Labels`,
        });
      } else {
        res.status(500).send({ message: "Error printing Labels" });
      }
    } else res.send({ message: `LABELS ARE PRINTING` });
  });
};
