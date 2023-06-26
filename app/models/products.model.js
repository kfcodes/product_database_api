const sql = require("./db.js");

// constructor;
const Product = function (product) {
  this.product_id = product.product_id;
  this.product_description = product.product_description;
  this.commodity_code = product.commodity_code;
  this.stock = product.stock;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product_database SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.getAll = (result) => {
  sql.query("SELECT * FROM product_database", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.findById = (productId, result) => {
  sql.query(
    `SELECT * FROM product_database WHERE product_id = ${productId}`,
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

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE product SET designation = ?, doj = ?, name = ?, salary = ? WHERE id = ?",
    [product.designation, product.doj, product.name, product.salary, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM product_database WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = (result) => {
  sql.query("DELETE FROM product_database", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

Product.getAllBrands = (result) => {
  sql.query("SELECT * FROM brand", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("brands: ", res);
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
      // not found product with the id
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
      // not found product with the id
      result({ kind: "not_found" }, null);
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
Product.getAllPallets = (result) => {
  // sql.query("SELECT * FROM full_pallet_info", (err, res) => {
  // sql.query("select * from packing_list_view", (err, res) => {
  sql.query("select * from test_view_2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("brands: ", res);
    console.log("These are the pallets in the db: ", res);
    result(null, res);
  });
};
Product.getPackingListData = (result) => {
  sql.query(
    `select ${process.env.1}, ${process.env.2}, ${process.env.3}, ${process.env.4}, ${process.env.5}, ${process.env.6}, ${process.env.7}, ${process.env.8}, ${process.env.9} from packing_list_view WHERE ${process.env.2} IS NOT NULL AND ${process.env.9}>3000 ORDER BY substring(${process.env.2}, 1, 2), ${process.env.9}, ${process.env.10}, ${process.env.11} DESC`,
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
module.exports = Product;
Product.getPalletsForPallet = (palletid, result) => {
  sql.query(
    // `SELECT * FROM pallet_item where pallet_item_pallet_id="${palletid}"`,
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
Pallet.createNewPallet = (newPallet, result) => {
  // sql.query("INSERT INTO pallet_info SET ?", newPallet, (err, res) => {
  // sql.query("INSERT INTO pallet_info(empty_weight) VALUES(0)", (err, res) => {
  sql.query(
    "INSERT INTO pallet_info(pallet_type, packing_list) VALUES(1, 1)",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      sql.query("SELECT LAST_INSERT_ID()", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, { ...res[0] });
      });
    }
  );
};
// production_date=${new Date().toISOString()},
Pallet.updatePalletById = (id, pallet, date, result) => {
  sql.query(
    `UPDATE pallet_info SET 
    empty_weight=${pallet.empty_weight},  
    weight=${pallet.weight},  
    height=${pallet.height}, 
    pallet_type=${pallet.pallet_type},  
    packing_list="${pallet.packing_list}", 
    production_date="${date}"
    WHERE pallet_id=${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found brand with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated Pallet: ", { id: id, ...pallet });
      result(null, { id: id, ...pallet });
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
PalletItem.updatePalletItemById = (id, pallet_item, result) => {
  sql.query(
    `UPDATE pallet_item SET 
    WHERE item_id=${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated pallet Item: ", { id: id, ...pallet_item });
      result(null, { id: id, ...pallet_item });
    }
  );
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
Product.getPalletData = (result) => {
  // sql.query("SELECT * FROM full_pallet_info", (err, res) => {
  // sql.query("select * from packing_list_view", (err, res) => {
  sql.query(
    "select * from packing_list_view WHERE ID IS NOT NULL AND PALLET>3000 ORDER BY substring(ID, 1, 2), PALLET, COMPANY, item_id DESC",
    (err, res) => {
      // sql.query("select * from packing_list_view WHERE ID IS NOT NULL ORDER BY COMPANY, LETTER, PALLET, item_id", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      // console.log("brands: ", res);
      // console.log("These are the pallets in the db: ", res);
      console.log("Found Pallets in the DB");
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
      console.log("IT was this");
      // result({ kind: "not_found" }, null);
      result(null);
      return;
    }
  );
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
