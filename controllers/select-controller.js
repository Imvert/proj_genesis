const _selectDao = require("../daos/select-dao");

const getMisiones = async (req, rest) => {
  const result = await _selectDao.misionList();
  rest.json(result);
};

const getDistritos = async (req, res) => {
  const { idMision } = req.params;
  const result = await _selectDao.distritoList(Number(idMision));
  res.json(result);
};

const getIglesias = async (req, res) => {
  const { idDistrito } = req.params;
  const result = await _selectDao.iglesiaList(idDistrito);
  res.json(result);
};

const getTipoGp = async (req, res) => {
  const result = await _selectDao.tipoGpList();
  res.json(result);
};
module.exports = { getMisiones, getDistritos, getIglesias, getTipoGp };
