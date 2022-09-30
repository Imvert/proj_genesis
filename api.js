const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// var corsOptions = {
//   origin: ["http://localhost:3001"],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
// };

//app.use(cors(corsOptions));

app.use(cors());

app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  // res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  // console.log(req.header());
  //console.log(res.getHeader());
  //res.write("you posted:\n");
  //res.end(JSON.stringify(req.body, null, 2));
  next();
});

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", require("./Routes/Route")); /* buscar el orden */

var port = process.env.PORT || 3000;

app.listen(port);

console.log("API is runnning at " + port);
