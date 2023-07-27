const express = require("express");
const router = express.Router();
const products = require("../controllers/old_product.controller.js");
const upload = require("../modules/upload/multerPdf.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
const Documentation = require("../controllers/production/productionDocumentation.controllers");
const Ps = require("../controllers/production/productionSchedule.controllers");
const PalletItem = require("../controllers/pallet/palletItem.controllers");
const Po = require("../controllers/po/po.controllers");
const Pallet = require("../controllers/pallet/pallet.controllers");
const PalletLabel = require("../controllers/label/palletLabel.controllers");
const BoxLabel = require("../controllers/label/boxLabel.controllers");
const Checksheet = require("../controllers/checksheet/checksheet.controllers");
const FileUpload = require("../controllers/upload/fileUpload.controllers")
const PdfLabel = require("../controllers/label/pdfLabel.controllers")
const BlankLabel = require("../controllers/label/blankLabel.controllers")
const FinishedProduct = require("../controllers/production/finishedProduct.controllers")
const Data = require("../controllers/pallet/palletDump.controllers")
const RecentPallets = require("../controllers/pallet/recentPallets.controllers")

// const { boxLabel } = require("../controllers/label/oldlabels/box_label.js");

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

// CREATE A PO
router.post("/po", Po.createPo);

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

// LABEL ROUTES
// PRINT PALLET LABEL
router.get("/label/:id", PalletLabel.printPalletLabel);
// PRINT PRODUCT LABEL
router.post("/box_label/:id", BoxLabel.printBoxLabel);
// PRINT BLANK LABELS
router.post("/print_blank_labels", BlankLabel.printBlankLabels);
// PRINT LABELS FROM PDF FILES
router.post("/print_pdf/:id", PdfLabel.printPdf);

// PRINT CHECK SHEET
router.get("/check_sheet", Checksheet.printCheckSheet);

router.post("/upload_pdf", upload.array("files", 10), FileUpload.uploadPdf);
router.post("/upload_data", upload.array("files", 10), FileUpload.uploadData);

// GET PALLET DATA
router.post("/data/:id", Data.getData);

// PALLET LISTS ROUTES
router.get("/pallets", RecentPallets.findRecentPallets);
router.get("/pallet_data", RecentPallets.findPalletData);
router.get("/latest_pallet_data", products.latestPalletData);

// FINISHED PRODUCT ROUTES
router.get("/finished_product/:id", FinishedProduct.findFinishedProduct);
router.post("/finished_product", FinishedProduct.createFinishedProduct);
// router.put("/finished_product/:id", FinishedProduct.updateFinishedProduct);

module.exports = router;
