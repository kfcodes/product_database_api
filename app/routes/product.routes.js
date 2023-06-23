const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller.js");
//const UploadPdf = require("../fileUpload/multerPdf.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, "test3" + '-' + uniqueSuffix +".pdf")
    cb(null, file.originalname);
  },
});
// Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };

const upload = multer({
  storage: storage,
});
// fileFilter: multerFilter,

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

// Retrieve all brands
router.get("/brands", products.findAllBrands);

// Retrieve all products from specific brand
router.get("/products_from_brand/:brandId", products.productsFromBrand);

// Retrieve all products
router.get("/finished_products", products.findFinishedProducts);

// Retrieve a single product with productId
router.get("/bom/:productId", products.findBom);

// Retrieve a single product with productId
router.get("/pallet/:palletid", products.findPallet);

// Get All pallets
router.get("/pallets", products.findRecentPallets);

// Get All pallets
router.get("/pallets", products.findRecentPallets);
// Get All pallets
router.get("/all_pallets", products.findAllPallets);
module.exports = router;
// Get All pallets
router.get("/pallet_data", products.findPalletData);
