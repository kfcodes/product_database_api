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
// Get All pallets
router.get("/pallet_data", products.findPalletData);
// Get All pallets
router.get("/pallet_items", products.findAllPalletItems);
module.exports = router;
// Get All pallet items for a pallet 
router.get("/pallet_items/:palletid", products.findPalletItemsForPallet);
// Retrieve a single product with productId
router.get("/pallets/:brand_prefix", products.findAllPalletsfromBrand);
// Create a new pallet
router.post("/pallet", products.createPallet);
// Update a pallet with pallet id
router.put("/pallet/:palletid", products.update);
// Create a new pallet item
router.post("/pallet_item/:palletid", products.createPalletItem);
// update a pallet item with the id of that pallet item
router.put("/pallet_item/:itemid", products.updatePalletItem);
// Delete a brand with brandId
router.delete("/pallet_item/:itemid", products.deletePalletItem);
router.get("/check_sheet", products.printCheckSheet);
// Print the label for a single pallet
router.get("/label/:palletid", products.printPalletLabel);
// Print the label for a single pallet
router.post("/box_label/:eolid", products.printBoxLabel);
// Get current Production
router.get("/mps", products.findCurrentProduction);
// Get All Production
router.get("/full_mps", products.findAllProduction);
