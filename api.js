var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/* no se si va a funcionar esto pero ahi vamos jaja */
//app.use("/api/v1", router); // osea esta linea de codigo

app.use("/", require("./Routes/route"));

var port = process.env.PORT || 3000;

app.listen(port);

console.log("API is runnning at " + port);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});
