const express = require("express");
const router = express.Router();
const brands = require("../controllers/brand.controller.js");

// Create a new brand
router.post("/", brands.create);

// Retrieve all brands
router.get("/", brands.findAll);

// Retrieve a single brand with brandId
router.get("/:brandId", brands.findOne);

// Update a brand with brandId
router.put("/brandId", brands.update);

// Delete a brand with brandId
router.delete("/brandId", brands.delete);

// Delete all brands
router.delete("/", brands.deleteAll);

module.exports = router;
