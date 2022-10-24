const express = require("express");
const router = express.Router();
const brands = require("../controllers/brand.controller.js");

// Create a new brand
router.post("/brands", brands.create);

// Retrieve all brands
router.get("/brands", brands.findAll);

// Retrieve a single brand with brandId
router.get("/brands/:brandId", brands.findOne);

// Update a brand with brandId
router.put("/brands/brandId", brands.update);

// Delete a brand with brandId
router.delete("/brands/brandId", brands.delete);

// Delete all brands
router.delete("/brands", brands.deleteAll);

module.exports = router;
