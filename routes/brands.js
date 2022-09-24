const express = require("express"),
  router = express.Router();

// get brand lists
router.get("/list", function (req, res) {
  let sql = `SELECT * FROM brand`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Brand lists retrieved successfully",
    });
  });
});

// create new brand
router.post("/new", function (req, res) {
  let sql = `INSERT INTO brand(name) VALUES (?)`;
  let values = [req.body.name];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({ status: 200, message: "New brand added successfully" });
  });
});

module.exports = router;
