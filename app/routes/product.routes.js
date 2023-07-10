const express = require("express");
const router = express.Router();
const products = require("../controllers/old_product.controller.js");
const upload = require("../controllers/fileUpload/multerPdf.js");

// Retrieve all brands
router.get("/brands", products.findAllBrands);

// Retrieve all products from specific brand
router.get("/products_from_brand/:brandId", products.productsFromBrand);

// Retrieve all products
router.get("/products", products.findAll);

// Retrieve all products
router.get("/finished_products", products.findFinishedProducts);

// Retrieve a single product with productId
router.get("/products/:productId", products.findOne);

// Retrieve a single product with productId
router.get("/bom/:productId", products.findBom);

// Retrieve a single product with productId
router.get("/pallet/:palletid", products.findPallet);

// Get All pallets
router.get("/pallets", products.findRecentPallets);

// Get All pallets
router.get("/all_pallets", products.findAllPallets);

// Get All pallets
router.get("/pallet_data", products.findPalletData);

router.get("/check_sheet", products.printCheckSheet);

// Get All pallets
router.get("/pallet_items", products.findAllPalletItems);

// Get All pallets
router.get("/pallet_items/:palletid", products.findPalletItemsForPallet);

// Update the pallet items
// router.get("/pallet_items/:palletid", products.findPalletItemsForPallet);

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

// Print the label for a single pallet
router.get("/label/:palletid", products.printPalletLabel);

// Print the label for a single pallet
router.post("/box_label/:eolid", products.printBoxLabel);

// Get current Production
router.get("/mps", products.findCurrentProduction);

// Get All Production
router.get("/full_mps", products.findAllProduction);

// Create EOL data
router.post("/eol", products.createEol);

// Get single EOL data
router.get("/eol/:eolid", products.findEol);

// Update Eol by ID
router.put("/eol/:eolid", products.updateEol);

// Dump Sql Pallet data
router.post("/dump/:palletId", products.dumpSqlData);

// Create a new pallet
router.post("/po", products.createPo);

// router.post("/upload_pdf", UploadPdf.UploadPdf.single("input-file-upload"), products.uploadPdf);
// router.post("/upload_pdf", UploadPdf.UploadPdf.single("input-file-upload"), products.uploadPdf);
router.post("/upload_pdf", upload.array("files", 10), products.uploadPdf);

router.post("/upload_data", upload.array("files", 10), products.uploadData);

// var upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' })
// router.post('/upload_pdf',upload.array('files', 12),function(req,res, next){
// console.log(req.body)
// console.log(req.files)
// });

router.post("/print_pdf/:pdfname", products.printPdf);

router.post("/print_blank_labels", products.printBlankLabels);

// Get All pallets
router.get("/latest_pallet_data", products.latestPalletData);

module.exports = router;
