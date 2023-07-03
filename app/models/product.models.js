// Product Constructor;
const Product = function (product) {
  this.process.env.PRODUCT_1 = product.process.env.PRODUCT_1;
  this.process.env.PRODUCT_2 = product.process.env.PRODUCT_2;
  this.process.env.PRODUCT_3 = product.process.env.PRODUCT_3;
  this.process.env.PRODUCT_4 = product.process.env.PRODUCT_4;
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

Product.getPalletsFromBrand = (ubid, result) => {
  sql.query(
    `SELECT * FROM full_pallet_info WHERE pallet_item_product_id LIKE "${ubid}%"`,
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

Product.getPalletData = (pid, result) => {
  sql.query(
    `select * from packing_list_view WHERE ID IS NOT NULL AND PALLET>${pid} ORDER BY substring(ID, 1, 2), PALLET, COMPANY, item_id DESC`,
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

