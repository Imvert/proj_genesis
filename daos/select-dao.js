const rest = require("../conexion/rest-mssql-connection");
const response = require("../models/response-model");

//Enlista todas las misiones
const misionList = async () => {
  try {
    const result = await rest.executeStoredProcedure("SPListarMisiones");
    return response.estructura(result.data);
  } catch (error) {
    console.log(error);
    return response.estructura(0, "Error en el proceso", "Error");
  }
};

//Enlista los distrito segun la mision seleccionada
const distritoList = async (data) => {
  try {
    let result = await rest.executeStoredProcedure(
      "SPListarDistritoPorMision",
      null,
      { idMision: data }
    );
    return response.estructura(result.data);
  } catch (error) {
    console.log(error);
    return response.estructura(0, "Error en el proceso", "Error");
  }
};

//Enlista las iglesias segun el distrito seleccionado
const iglesiaList = async (data) => {
  try {
    let result = await rest.executeStoredProcedure(
      "SPIglesiaListaIglesiasDistrito",
      null,
      {
        idDistrito: data,
      }
    );
    return response.estructura(result.data);
  } catch (error) {
    return response.estructura(0, "Error en el proceso", "Error");
  }
};

//Enlista los tipos de grupo
const tipoGpList = async () => {
  try {
    let result = await rest.executeStoredProcedure("SPTipoGrupoPequeño");
    return response.estructura(result.data);
  } catch (error) {
    return response.estructura(0, "Error en el proceso", "Error");
  }
};

module.exports = { misionList, distritoList, iglesiaList, tipoGpList };
