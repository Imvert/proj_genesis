// Conexion con REST-MSSQL-NODEJS

const rest = new (require("rest-mssql-nodejs"))({
  user: "Trabajo",
  password: "alexander21",
  server: "LAPTOPALEX",
  database: "bd_gpue_genesis",
  pool: {
    max: 10,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  // requestTimeout: 180000, // for timeout setting
  // connectionTimeout: 180000, // for timeout setting
  options: {
    encrypt: false, // this is optional, by default is false
    enableArithAbort: true,
    // trustServerCertificate: true,
  },
});

module.exports = rest;
