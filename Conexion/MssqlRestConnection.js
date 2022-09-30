// Conexion con REST-MSSQL-NODEJS

const rest = new (require("rest-mssql-nodejs"))({
  user: "sa",
  password: "1844.",
  server: "JSONMC\\SQLEXPRESS",
  database: "bd_gpue_genesis",
  port: 1433,
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
    enableArithAbort: true,
    trustServerCertificate: true,
    //instancename: "",
  },
});

module.exports = rest;
