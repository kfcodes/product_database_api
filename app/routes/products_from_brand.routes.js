const express = require("express");
const router = express.Router();
const products_from_brand = require("../controllers/products_from_brand.controller.js");

// Retrieve all products
router.get("/products_from_brand", products_from_brand.findAll);

// Retrieve all products from specific brand
router.get("/products_from_brand/:brandId", products_from_brand.findByBrand);

module.exports = router;
