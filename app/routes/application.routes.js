const express = require("express");
const router = express.Router();
const ls = require("../controllers/pallet/latestPalletData.controllers");
const upload = require("../modules/file/uploadFile.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
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

router.get("/products", ProductDB.findAll);
router.get("/finished_products", ProductDB.findFinishedProducts);
router.get("/product/:id", ProductDB.findOne);
router.get("/finished_products/:id", ProductDB.findOneFinishedProduct);

router.get("/production", Ps.findCurrentProduction);
router.get("/all_production/:id", Ps.findAllProductionById);
router.get("/production/:id", Ps.findProductionRecordById);

router.get("/pallet_items/:id", PalletItem.findPalletItemsForPallet);
router.put("/pallet_item/:id", PalletItem.updatePalletItem);

router.put("/pallet/:id", Pallet.update);
router.get("/pallets/:id", Pallet.palletsById);

router.get("/label_info/:id", BoxLabel.getBoxLabel);
router.post("/box_label/:id", BoxLabel.printBoxLabel);
router.post("/print_blank_labels", BlankLabel.printBlankLabels);
router.post("/print_pdf/:id", PdfLabel.printPdf);

router.get("/picklist", printPickList);

router.post("/upload_pdf", upload.array("files", 10), FileUpload.uploadPdf);
router.post("/upload_data", upload.array("files", 10), FileUpload.uploadData);

router.post("/data/:id", Data.getData);

router.get("/pallet_data", RecentPallets.findPalletData);
router.get("/latest_pallet_data", ls.latestPalletData);

router.get("/finished_product/:id", FinishedProduct.findFinishedProduct);
router.post("/finished_product", FinishedProduct.createFinishedProduct);

module.exports = router;
