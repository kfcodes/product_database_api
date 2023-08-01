const sql = require("../db/dbConnect.js");
const Product = require("./product.constructor.js");
require("dotenv").config();


Product.getAll = (result) => {
  sql.query(
    `SELECT ${process.env.PRODUCT_1}, ${process.env.PRODUCT_2} FROM ${process.env.PD}`,
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


Product.findById = (pid, result) => {
  sql.query( 
    `SELECT * FROM ${process.env.PI} WHERE ${process.env.1}="${pid}"`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("product: ", res);
      result(null, res);
    }
  );
};

Product.getAllBrands = (result) => {
  sql.query(`SELECT * FROM ${process.env.B}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("BRANDS: ", res);
    result(null, res);
  });
};

Product.productsFromBrand = (bid, result) => {
  sql.query(
    `SELECT * FROM ${process.env.PD} WHERE ${process.env.1} LIKE "${bid}%"`,
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

Product.findBomById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.BCD} WHERE ${Pprocess.env.PRODUCT_5}= ${id}`,
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

Product.findPalletById = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.PAI} WHERE ${process.env.PALLET1}= ?`,
    [id],
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

Product.findPalletByBrand = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.BID} LIKE ${id}%`,
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

Product.printPalletLabel = (id, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.PALLET_1}= ${id} AND ${process.env.PALLETITEM_3} IS NOT null;`, (err, res) => {
      if (err) {
        console.log(`error: `, err);
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
    `SELECT * FROM test_view_2 ORDER by ${process.env.PALLET_1} Desc LIMIT 20`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.newGetRecentPallets = (result) => {
  sql.query(
    `SELECT * FROM test_view_2 ORDER by ${process.env.PALLET_1} Desc LIMIT 20`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.getLatestPallets = (result) => {
  sql.query(`SELECT * FROM ${process.env.MPAI} ORDER BY ${process.env.PALLET_1} DESC LIMIT 20 `, (err, res) => {
    if (err) {
      console.log(`error: `, err);
      result(null, err);
      return;
    }
    result(null, res);
    return res;
  });
};

Product.getLatestPalletProducts = async (palletid, result) => {
  sql.query(
    `SELECT * FROM test_view WHERE pallet_item_${process.env.PALLET_1} = ? AND ${process.env.PALLETITEM_3} IS NOT NULL`,
    [palletid],
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Product.getAllPallets = (result) => {
  sql.query(`select * from test_view_2`, (err, res) => {
    if (err) {
      console.log(`error: `, err);
      result(null, err);
      return;
    }
    console.log(`These are the pallets in the db: `, res);
    result(null, res);
  });
};

Product.getAllPalletItems = (result) => {
  sql.query(`SELECT * FROM test_view`, (err, res) => {
    if (err) {
      console.log(`error: `, err);
      result(null, err);
      return;
    }
    console.log(`These are the pallet itemes in the db: `, res);
    result(null, res);
  });
};

Product.getPalletsForPallet = (palletid, result) => {
  sql.query(
    `SELECT * FROM test_view where pallet_item_${process.env.PALLET_1}=${palletid}`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      console.log(`Products on the pallet: `, res);
      result(null, res);
    }
  );
};

Product.getPalletsFromBrand = (ubid, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.PALLETITEM_3} LIKE `${ubid}%``,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      console.log(`products: `, res);
      result(null, res);
    }
  );
};

Product.getPalletData = (pid, result) => {
  sql.query(
    `select * from packing_list_view WHERE ID IS NOT NULL AND PALLET>${pid} ORDER BY substring(ID, 1, 2), PALLET, COMPANY, item_id DESC`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};



Product.printBoxLabel = (eolid, result) => {
  sql.query(
    `SELECT * FROM production_labels WHERE eol_id= ?`,
    [eolid],
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      result({ kind: `not_found` }, null);
    }
  );
};

Product.getAllProduction = (result) => {
  sql.query(`SELECT * FROM production_overview`, (err, res) => {
    if (err) {
      console.log(`error: `, err);
      result(null, err);
      return;
    }
    console.log(`These are Products being produced: `, res);
    result(null, res);
  });
};
Product.getCurrentProduction = (result) => {
  sql.query(
    `SELECT * FROM production_overview2 where pallet_total IS NOT NULL ORDER by mps_id Desc LIMIT 20`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      console.log(`These are Products being produced: `, res);
      result(null, res);
    }
  );
};

Product.dumpSqlData = (palletId, result) => {
  sql.query(
    `SELECT * FROM ${process.env.FPAI} WHERE ${process.env.PALLET_1} > ?`,
    [palletId],
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log(`found pallet details: `, res);
        result(null, res);
        return;
      }
      result({ kind: `not_found` }, null);
    }
  );
};

Product.getAllFinishedProducts = (result) => {
  sql.query(
    `SELECT product_id, product_description FROM product_database where product_id rlike '^[a-z]'  AND product_description NOT LIKE 'do not use%';`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      console.log(`products: `, res);
      result(null, res);
    }
  );
};

Product.getLatestData = (result) => {
  sql.query(
    `select ${process.env.1}, ${process.env.2}, ${process.env.4}, ${process.env.5}, ${process.env.6}, ${process.env.12}, ${process.env.13}, ${process.env.8}, ${process.env.9} from packing_list_view WHERE ${process.env.9} IN (select * from latest_pallets) AND ${process.env.2} IS NOT NULL ORDER BY ${process.env.9} DESC`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};
Product.getPackingListData = (pid, result) => {
  sql.query(
    `select ${process.env.1}, ${process.env.2}, ${process.env.3}, ${process.env.4}, ${process.env.5}, ${process.env.6}, ${process.env.7}, ${process.env.8}, ${process.env.9} from packing_list_view WHERE ${process.env.2} IS NOT NULL AND ${process.env.9}>${pid} ORDER BY substring(${process.env.2}, 1, 2), ${process.env.9}, ${process.env.14}, ${process.env.11} DESC`,
    (err, res) => {
      if (err) {
        console.log(`error: `, err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

module.exports = Product;
