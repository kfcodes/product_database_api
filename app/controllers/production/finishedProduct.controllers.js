const FinishedProduct = require("../../models/finishedProducts/finishedProduct.models");
const { exec } = require("child_process");
require("dotenv").config();

exports.findFinishedProduct = (req, res) => {
  FinishedProduct.findFinishedProductById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Can't find eol with id ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving eol with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.createFinishedProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  FinishedProduct.createNewFinishedProduct(req.body).then((data) => {
    exec(
      `cd ../production_scripts/; python3 info.py ${data}`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        } else 
          console.log(stdout);
          res.send({message: "printing Product info" })
      },
    );
  });
};
