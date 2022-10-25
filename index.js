// Fixed imports and routes
const express = require("express"),
  app = express(),
  mysql = require("mysql"), // import mysql module
  cors = require("cors"),
  bodyParser = require("body-parser");

// make server object that contain port property and the value for our server.
var server = {
  port: 4040,
};

// use the modules
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
const brandsRouter = require("./app/routes/brand.routes.js");
const productsRouter = require("./app/routes/product.routes.js");
const productsFromBrandRouter = require("./app/routes/products_from_brand.routes.js");
// use router
app.use("/", brandsRouter);
app.use("/", productsRouter);
app.use("/", productsFromBrandRouter);

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
