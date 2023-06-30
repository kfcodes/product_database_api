const sql = require("./db.js");
const palletLabel = require("../labels/actual_pallet_label_with_data.js");
require('dotenv').config();

// Product Constructor;
const Product = function (product) {
  this.process.env.PRODUCT_1 = product.process.env.PRODUCT_1;
  this.process.env.PRODUCT_2 = product.process.env.PRODUCT_2;
  this.process.env.PRODUCT_3 = product.process.env.PRODUCT_3;
  this.process.env.PRODUCT_4 = product.process.env.PRODUCT_4;
};

// PO Constructor;
const Po = function (po) {
  this.process.env.PO_1 = po.process.env.PO_1;
  this.process.env.PO_2 = po.process.env.PO_2;
};

// Pallet Constructor;
const Pallet = function (pallet) {
  this.PALLET_1 = pallet.PALLET_1;
  this.PALLET_2 = pallet.PALLET_2;
  this.PALLET_3 = pallet.PALLET_3;
  this.PALLET_4 = pallet.PALLET_4;
  this.PALLET_5 = pallet.PALLET_5;
  this.PALLET_6 = pallet.PALLET_6;
};


Product.getAll = (result) => {
  sql.query(
    "SELECT product_id, product_description FROM product_database",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("products: ", res);
      result(null, res);
    }
  );
};

Product.getAllFinishedProducts = (result) => {
  sql.query(
    "SELECT product_id, product_description FROM product_database where product_id rlike '^[a-z]'  AND product_description NOT LIKE 'do not use%';",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("products: ", res);
      result(null, res);
    }
  );
};

Product.findById = (productId, result) => {
  sql.query(
    "SELECT * FROM product_info WHERE product_id = ?",
    [productId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found product: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found product with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Product.getAllBrands = (result) => {
  sql.query("SELECT * FROM brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Have brands: ", res);
    result(null, res);
  });
};

Product.productsFromBrand = (brandId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE product_id LIKE "${brandId}%"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("products: ", res);
      result(null, res);
    }
  );
};

Product.findBomById = (productId, result) => {
  sql.query(
    "SELECT * FROM bom_component_data WHERE bom_product_id= ?",
    [productId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found components: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Product.findPalletById = (palletid, result) => {
  sql.query(
    "SELECT * FROM pallet_info WHERE pallet_id= ?",
    [palletid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Product.findPalletByBrand = (brandId, result) => {
  sql.query(
    `SELECT * FROM full_pallet_info WHERE brand_id LIKE "${brandId}%"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Pallets: ", res);
      result(null, res);
    }
  );
};

Product.printPalletLabel = (palletid, result) => {
  console.log(`Printed with: ${palletid}`);
  sql.query(
    "SELECT * FROM full_pallet_info WHERE pallet_id= ? AND pallet_item_product_id IS NOT null;",
    [palletid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      result(null);
      return;
    }
  );
};

Product.getRecentPallets = (result) => {
  sql.query(
    "SELECT * FROM test_view_2 ORDER by pallet_id Desc LIMIT 20",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("These are the pallets in the db: ", res);
      result(null, res);
    }
  );
};

Product.newGetRecentPallets = (result) => {
  sql.query(
    "SELECT * FROM test_view_2 ORDER by pallet_id Desc LIMIT 20",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("These are the pallets in the db: ", res);
      result(null, res);
    }
  );
};

Product.getLatestPallets = (result) => {
  sql.query("SELECT * FROM more_pallet_info ORDER BY pallet_id DESC LIMIT 20 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
    return res;
  });
};

Product.getLatestPalletProducts = async (palletid, result) => {
  sql.query(
    "SELECT * FROM test_view WHERE pallet_item_pallet_id = ? AND pallet_item_product_id IS NOT NULL",
    [palletid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.getAllPallets = (result) => {
  sql.query("select * from test_view_2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("These are the pallets in the db: ", res);
    result(null, res);
  });
};

Product.getAllPalletItems = (result) => {
  sql.query("SELECT * FROM test_view", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("These are the pallet itemes in the db: ", res);
    result(null, res);
  });
};

Product.getPalletsForPallet = (palletid, result) => {
  sql.query(
    `SELECT * FROM test_view where pallet_item_pallet_id="${palletid}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Products on the pallet: ", res);
      result(null, res);
    }
  );
};

Product.getPalletsFromBrand = (brand_prefix, result) => {
  sql.query(
    `SELECT * FROM full_pallet_info WHERE pallet_item_product_id LIKE "${brand_prefix}%"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("products: ", res);
      result(null, res);
    }
  );
};


PalletItem.createNewPalletItem = (newPalletItem, result) => {
  sql.query("INSERT INTO pallet_item SET ?", newPalletItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created pallet item: ", { ...newPalletItem });
    result(null, { ...newPalletItem });
  });
};

PalletItem.remove = (itemid, result) => {
  sql.query("DELETE FROM pallet_item WHERE item_id = ?", itemid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Pallet item with id: ", itemid);
    result(null, res);
  });
};

Product.printBoxLabel = (eolid, result) => {
  sql.query(
    "SELECT * FROM production_labels WHERE eol_id= ?",
    [eolid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        // console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Product.getAllProduction = (result) => {
  sql.query("SELECT * FROM production_overview", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("These are Products being produced: ", res);
    result(null, res);
  });
};

Product.getCurrentProduction = (result) => {
  sql.query(
    "SELECT * FROM production_overview2 where pallet_total IS NOT NULL ORDER by mps_id Desc LIMIT 20",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("These are Products being produced: ", res);
      result(null, res);
    }
  );
};

Eol.findEolById = (eolid, result) => {
  sql.query(
    "SELECT * FROM eol WHERE eol_id= ?",
    [eolid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Eol details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Eol.createNewEol = (newEol, result) => {
  sql.query("INSERT INTO eol SET ?", newEol, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};


Product.dumpSqlData = (palletId, result) => {
  sql.query(
    "SELECT * FROM full_pallet_info WHERE pallet_id > ?",
    [palletId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found pallet details: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

Po.createNewPo = async (newPo, result) => {
  sql.query("INSERT INTO po SET ?", newPo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

module.exports = { Product, Pallet, PalletItem, Eol, Po };
