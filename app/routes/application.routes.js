const express = require("express");
const router = express.Router();
const ls = require("../controllers/pallet/latestPalletData.controllers");
const upload = require("../modules/file/uploadFile.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
const Documentation = require("../controllers/production/productionDocumentation.controllers");
const Ps = require("../controllers/production/productionSchedule.controllers");
const PalletItem = require("../controllers/pallet/palletItem.controllers");
const Pallet = require("../controllers/pallet/pallet.controllers");
const PalletLabel = require("../controllers/label/palletLabel.controllers");
const BoxLabel = require("../controllers/label/boxLabel.controllers");
const {
  printPickList,
} = require("../controllers/pickList/pickList.controllers");
const FileUpload = require("../controllers/upload/fileUpload.controllers");
const PdfLabel = require("../controllers/label/pdfLabel.controllers");
const BlankLabel = require("../controllers/label/internalLabel.controllers");
const FinishedProduct = require("../controllers/production/finishedProduct.controllers");
const Data = require("../controllers/pallet/palletDump.controllers");
const RecentPallets = require("../controllers/pallet/recentPallets.controllers");

// PRODUCT DB ROUTES
// RETRIEVE ALL PRODUCT
router.get("/products", ProductDB.findAll);
// RETRIEVE ALL proDUCTS
router.get("/finished_products", ProductDB.findFinishedProducts);
// RETRIEVE A SINGLE PRODUCT WITH PRODUCTID
router.get("/product/:id", ProductDB.findOne);
router.get("/finished_products/:id", ProductDB.findOneFinishedProduct);

// PRODUCTION DOCUMENTATION ROUTES
// RETRIEVE ALL BRANDS
router.get("/brands", Documentation.findAllBrands);
// RETRIEVE ALL PRODUCTS FROM SPECIFIC BRAND
router.get("/brandproducts/:id", Documentation.brandProducts);
// RETRIEVE A SINGLE PRODUCT WITH PRODUCTID
router.get("/components/:id", Documentation.productDocumentation);

// PRODUCTION ROUTES
// SHOW CURRENT PRODUCTION
router.get("/production", Ps.findCurrentProduction);
// ALL PRODUCTION FOR AN ID
router.get("/all_production/:id", Ps.findAllProductionById);
// GET PRODUCTION RECORD BY ID
router.get("/production/:id", Ps.findProductionRecordById);

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

// PALLET ROUTES
// CREATE A NEW PALLET
router.post("/pallet", Pallet.createPallet);
// GET ALL PALLETS
router.get("/all_pallets", Pallet.findAllPallets);
// RETRIEVE INDIVIDUAL PALLET DETAILS
router.get("/pallet/:id", Pallet.findPallet);
// UPDATE PALLET
router.put("/pallet/:id", Pallet.update);
// DELETE A PALLET
// router.delete("/pallet/:id", Pallet.deletePallet);
// RETRIEVE PALLEST WITH SIMILAR PRODUCTS
router.get("/pallets/:id", Pallet.palletsById);
// route to combine pallet data
router.put("/combine_pallets", Pallet.combinePallets);
router.get("/possible_pallets", Pallet.getPossiblePallets);
router.get("/pallet_details/:id", Pallet.getPalletDetails);

// LABEL ROUTES
// PRINT PALLET LABEL
router.get("/label/:id", PalletLabel.printPalletLabel);
// GET BOX LABEL INFO
router.get("/label_info/:id", BoxLabel.getBoxLabel);
// PRINT PRODUCT LABEL
router.post("/box_label/:id", BoxLabel.printBoxLabel);
// PRINT BLANK LABELS
router.post("/print_blank_labels", BlankLabel.printBlankLabels);
// PRINT LABELS FROM PDF FILES
router.post("/print_pdf/:id", PdfLabel.printPdf);

// PRINT CHECK SHEET
router.get("/picklist", printPickList);

router.post("/upload_pdf", upload.array("files", 10), FileUpload.uploadPdf);
router.post("/upload_data", upload.array("files", 10), FileUpload.uploadData);

// GET PALLET DATA
router.post("/data/:id", Data.getData);

// PALLET LISTS ROUTES
router.get("/pallets", RecentPallets.findRecentPallets);
// Export pallet data
router.get("/pallet_data", RecentPallets.findPalletData);
router.get("/latest_pallet_data", ls.latestPalletData);

// FINISHED PRODUCT ROUTES
router.get("/finished_product/:id", FinishedProduct.findFinishedProduct);
router.post("/finished_product", FinishedProduct.createFinishedProduct);
// router.put("/finished_product/:id", FinishedProduct.updateFinishedProduct);

module.exports = router;
