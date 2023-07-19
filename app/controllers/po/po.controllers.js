const Po = require("../../models/po/po.models");

exports.createPo = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  const po = new Po({
    po_id: req.body.po,
    customer_po_id: req.body.customerCode,
  });
  Po.createNewPo(po, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    else res.send(data);
  });
};
