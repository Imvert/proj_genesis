const rest = require("../conexion/rest-mssql-connection");
const response = require("../Models/response-model");

const insert = async (data) => {
  try {
    let result = await rest.executeStoredProcedure("SPGuardarGP", null, {
      dataFormJson: data,
    });
    return response.estructura(result.data);
  } catch (err) {
    return response.estructura(0, "Error en el proceso", "Error");
  }
};

module.exports = { insert };
