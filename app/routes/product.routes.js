const express = require("express"),
  router = express.Router();

// let sql = `SELECT * FROM product_database`;
// let sql = `SELECT * FROM product_database WHERE product_id LIKE (?)`;
// get product lists
router.get("/list", function (req, res) {
  let sql = `SELECT * FROM product_database WHERE product_id LIKE "zu%"`;
  let value = req.body.prefix;
  console.log(value);
  // db.query(sql, [ value ], function(err, data, fields) {
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      value,
      message: "Product lists retrieved successfully",
    });
  });
});

// create new product
router.post("/new", function (req, res) {
  let sql = `INSERT INTO product_database(name, type) VALUES (?)`;
  let values = [req.body.name, req.body.type];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({ status: 200, message: "New product added successfully" });
  });
});

module.exports = router;
