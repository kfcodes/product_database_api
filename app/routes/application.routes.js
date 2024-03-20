const express = require("express");
const router = express.Router();
const ls = require("../controllers/pallet/latestPalletData.controllers");
const upload = require("../modules/file/uploadFile.js");
const ProductDB = require("../controllers/production/dbProduct.controllers");
const PalletItem = require("../controllers/pallet/palletItem.controllers");
const Pallet = require("../controllers/pallet/pallet.controllers");
const FileUpload = require("../controllers/upload/fileUpload.controllers");
const FinishedProduct = require("../controllers/production/finishedProduct.controllers");
const Data = require("../controllers/pallet/palletDump.controllers");
const RecentPallets = require("../controllers/pallet/recentPallets.controllers");

router.get("/products", ProductDB.findAll);
router.get("/product/:id", ProductDB.findOne);

router.get("/finished_products", ProductDB.findFinishedProducts);
router.get("/finished_products/:id", ProductDB.findOneFinishedProduct);

router.post("/finished_product", FinishedProduct.createFinishedProduct);
router.get("/finished_product/:id", FinishedProduct.findFinishedProduct);

router.put("/pallet_item/:id", PalletItem.createPalletItem);
router.put("/pallet_item/:id", PalletItem.updatePalletItem);
router.put("/pallet/:id", Pallet.update);

router.post("/data/:id", Data.getData);
router.get("/pallet_data", RecentPallets.findPalletData);
router.get("/latest_pallet_data", ls.latestPalletData);

router.post("/upload_pdf", upload.array("files", 10), FileUpload.uploadPdf);
router.post("/upload_data", upload.array("files", 10), FileUpload.uploadData);

module.exports = router;
