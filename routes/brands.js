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
module.exports = router;
