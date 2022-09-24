// Create routes for products
const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser");

// // setup database
db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simpleapi",
});

// make server object that contain port property and the value for our server.
var server = {
  port: 4040,
};

// use the modules
app.use(cors());
app.use(bodyParser.json());

// routers
const usersRouter = require("./routes/brands");
const usersRouter = require("./routes/products");
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
