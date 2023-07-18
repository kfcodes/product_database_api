const express = require("express");
const router = express.Router();
const products = require("../controllers/old_product.controller.js");
const upload = require("../controllers/fileUpload/multerPdf.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
const Documentation = require("../controllers/production/productionDocumentation.controllers");
const Ps = require("../controllers/production/productionSchedule.controllers");
const PalletItem = require("../controllers/pallet/palletItem.controllers");

// PRODUCT DB ROUTES
// RETRIEVE ALL PRODUCT
router.get("/products", ProductDB.findAll);
// RETRIEVE ALL PRODUCTS
router.get("/finished_products", ProductDB.findFinishedProducts);
// RETRIEVE A SINGLE PRODUCT WITH PRODUCTID
router.get("/products/:productId", ProductDB.findOne);

// PRODUCTION DOCUMENTATION ROUTES
// RETRIEVE ALL BRANDS
router.get("/brands", Documentation.findAllBrands);
// RETRIEVE ALL PRODUCTS FROM SPECIFIC BRAND
router.get("/brandproducts/:id", Documentation.productsByBrand);
// RETRIEVE A SINGLE PRODUCT WITH PRODUCTID
router.get("/components/:id", Documentation.productComponents);

// PRODUCTION SCHEDULE
// CURRENT PRODUCTION
router.get("/mps", Ps.findCurrentProduction);
// ALL PRODUCTION
router.get("/full_mps", Ps.findAllProduction);

// PALLET ITEM ROUTES
// GET ALL PALLET ITEMS IN THE DB
router.get("/pallet_items", PalletItem.findAllPalletItems);
// GET ALL PALLET ITEMS FOR A SINGLE PALLET
router.get("/pallet_items/:id", PalletItem.findPalletItemsForPallet);
// CREATE A NEW PALLET ITEM
router.post("/pallet_item/:id", PalletItem.createPalletItem);
// UPDATE A PALLET ITEM
router.put("/pallet_item/:id", PalletItem.updatePalletItem);
// DELETE A PALLET ITEM
router.delete("/pallet_item/:id", PalletItem.deletePalletItem);


// Retrieve a single product with productId
router.get("/pallet/:palletid", products.findPallet);
// Get All pallets
router.get("/pallets", products.findRecentPallets);
// Get All pallets
router.get("/all_pallets", products.findAllPallets);
// Get All pallets
router.get("/pallet_data", products.findPalletData);
router.get("/check_sheet", products.printCheckSheet);
// Retrieve a single product with productId
router.get("/pallets/:brand_prefix", products.findAllPalletsfromBrand);
// Print the label for a single pallet
router.get("/label/:palletid", products.printPalletLabel);
// Get single EOL data
router.get("/eol/:eolid", products.findFinishedProduct);
// Get All pallets
router.get("/latest_pallet_data", products.latestPalletData);

// Create a new pallet
router.post("/pallet", products.createPallet);
// Print the label for a single pallet
router.post("/box_label/:eolid", products.printBoxLabel);
// Create EOL data
router.post("/eol", products.createFinishedProduct);
// Dump Sql Pallet data
router.post("/dump/:palletId", products.dumpSqlData);
// Create a new pallet
router.post("/po", products.createPo);
router.post("/upload_pdf", upload.array("files", 10), products.uploadPdf);
router.post("/upload_data", upload.array("files", 10), products.uploadData);
router.post("/print_pdf/:pdfname", products.printPdf);
router.post("/print_blank_labels", products.printBlankLabels);

// Update a pallet with pallet id
router.put("/pallet/:palletid", products.update);
// Update FinishedProduct by ID
router.put("/eol/:eolid", products.updateFinishedProduct);


module.exports = router;
