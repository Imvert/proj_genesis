// Conexion con REST-MSSQL-NODEJS

const rest = new (require("rest-mssql-nodejs"))({
  user: process.env.DATA_BASE_USER,
  password: process.env.DATA_BASE_PASS,
  server: process.env.DATA_BASE_HOST,
  database: process.env.DATA_BASE_NAME,
  // port: 1433,|
  // dateStrings: "date",
  // enableArithAbort: true,
  // port: 1433,
  // pool: {
  //   max: 10,
  //   min: 10,
  //   idleTimeoutMillis: 30000,
  // },
  // requestTimeout: 180000, // for timeout setting
  // connectionTimeout: 180000, // for timeout setting
  options: {
    encrypt: true, // this is optional, by default is false
    trustedconnection: true,
    enableArithAbort: true,// parametro agregado manualmente en /node_modules/rest-mssql-nodejs/src/index.js 21
    trustServerCertificate: true,
    //instancename: "",
  },
});

module.exports = rest;
