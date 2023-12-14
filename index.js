express = require("express"),
app = express(),
cors = require("cors"),
bodyParser = require("body-parser");

var server = {
  port: 4040,
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productsRouter = require("./app/routes/application.routes.js");
app.use("/", productsRouter);

app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
