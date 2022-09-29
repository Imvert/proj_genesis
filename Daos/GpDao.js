const rest = require("../Conexion/MssqlRestConnection");

const insert = async (data) => {
  try {
    let result = await rest.executeStoredProcedure("SPGuardarGP", null, {
      dataFormJson: data,
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { insert };
