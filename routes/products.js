const express = require("express"),
  router = express.Router();

// get product lists
router.get("/list", function (req, res) {
  let sql = `SELECT * FROM product`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Product lists retrieved successfully",
    });
  });
});

// create new product
router.post("/new", function (req, res) {
  let sql = `INSERT INTO product(name, type) VALUES (?)`;
  let values = [req.body.name, req.body.gender];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({ status: 200, message: "New product added successfully" });
  });
});

module.exports = router;
