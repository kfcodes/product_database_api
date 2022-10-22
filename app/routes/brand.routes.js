const express = require("express");
const router = express.Router();
const brands = require("../controllers/brand.controller.js");

// Create a new brand
router.app.post("/", brands.create);

// Retrieve all brands
router.app.get("/", brands.findAll);

// Retrieve a single brand with brandId
router.app.get("/:brandId", brands.findOne);

// Update a brand with brandId
router.app.put("/brandId", brands.update);

// Delete a brand with brandId
router.app.delete("/brandId", brands.delete);

// Delete all brands
router.app.delete("/", brands.deleteAll);

module.exports = router;
