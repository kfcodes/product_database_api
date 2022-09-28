// Fixed imports and routes
const express = require("express"),
  app = express(),
  mysql = require("mysql"), // import mysql module
  cors = require("cors"),
  bodyParser = require("body-parser");

// Database Connection using localhost and test database
db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "",
  password: "",
  database: "test",
});

// make server object that contain port property and the value for our server.
var server = {
  port: 4040,
};

// use the modules
app.use(cors());
app.use(bodyParser.json());

// routers
const brandsRouter = require("./routes/brands");
const productsRouter = require("./routes/products");
// use the modules
app.use(cors());
app.use(bodyParser.json());
// use router
app.use("/brands", brandsRouter);
app.use("/products", productsRouter);

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
