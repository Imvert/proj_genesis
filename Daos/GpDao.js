const rest = require("../Conexion/MssqlRestConnection");
const response = require("../Models/ResponseModel");

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
