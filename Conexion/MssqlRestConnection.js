// Conexion con REST-MSSQL-NODEJS

const rest = new (require("rest-mssql-nodejs"))({
  user: "Trabajo",
  password: "alexander21",
  server: "LAPTOPALEX", // replace this with your IP Server
  database: "bd_gpue_genesis",
  //port: 3000, // this is optional, by default takes the port 1433
  requestTimeout: 180000, // for timeout setting
  connectionTimeout: 180000, // for timeout setting
  options: {
    // encrypt: false, // this is optional, by default is false
    enableArithAbort: true,
  },
  // options: {
  //   trustServerCertificate: true,
  // },
});

module.exports = rest;
