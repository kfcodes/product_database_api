const express = require("express");
const router = express.Router();

const ls = require("../controllers/pallet/latestPalletData.controllers");
const upload = require("../modules/file/uploadFile.js");
const PalletItem = require("../controllers/pallet/palletItem.controllers");
const Pallet = require("../controllers/pallet/pallet.controllers");
const BoxLabel = require("../controllers/label/boxLabel.controllers");
const {
  printPickList,
} = require("../controllers/pickList/pickList.controllers");
const FileUpload = require("../controllers/upload/fileUpload.controllers");
const PdfLabel = require("../controllers/label/pdfLabel.controllers");
const FinishedProduct = require("../controllers/production/finishedProduct.controllers");
const Data = require("../controllers/pallet/palletDump.controllers");
const RecentPallets = require("../controllers/pallet/recentPallets.controllers");

router.put("/pallet_item/:id", PalletItem.updatePalletItem);
router.put("/pallet/:id", Pallet.update);

// CHECK IS BOX LABEL AVAILABLE
router.get("/label_info/:id", BoxLabel.getBoxLabel);
// PRINT BOX LABEL
router.post("/box_label/:id", BoxLabel.printBoxLabel);
// EXPORT PALLET DATA
router.get("/pallet_data", RecentPallets.findPalletData);

router.post("/print_pdf/:id", PdfLabel.printPdf);


router.post("/upload_pdf", upload.array("files", 10), FileUpload.uploadPdf);
router.post("/upload_data", upload.array("files", 10), FileUpload.uploadData);

router.post("/data/:id", Data.getData);

router.get("/picklist", printPickList);

router.get("/latest_pallet_data", ls.latestPalletData);

router.get("/finished_product/:id", FinishedProduct.findFinishedProduct);
router.post("/finished_product", FinishedProduct.createFinishedProduct);

module.exports = router;
