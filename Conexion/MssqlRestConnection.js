// Conexion con REST-MSSQL-NODEJS

const rest = new (require("rest-mssql-nodejs"))({
  user: "Trabajo",
  password: "alexander21",
  server: "LAPTOPALEX",
  database: "bd_gpue_genesis",
  port: 1433, // this is optional, by default takes the port 1433
  requestTimeout: 180000, // for timeout setting
  connectionTimeout: 180000, // for timeout setting
  options: {
    encrypt: false, // this is optional, by default is false
    enableArithAbort: true,
    trustServerCertificate: true,
  },
});

module.exports = rest;
