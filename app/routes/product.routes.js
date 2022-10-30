const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller.js");

// Create a new product
router.post("/products", products.create);

// Retrieve all products
router.get("/products", products.findAll);

// Retrieve all products from specific brand
router.get("/products/products_from_brand/:brandId", products.findByBrand);

// Retrieve a single product with productId
router.get("/products/:productId", products.findOne);

// Update a product with productId
router.put("/products/:productId", products.update);

// Delete a product with productId
router.delete("/products/:productId", products.delete);

// Delete all products from the db
router.delete("/products", products.deleteAll);

module.exports = router;
