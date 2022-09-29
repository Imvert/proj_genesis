const _gpdao = require("../Daos/GpDao");

const saveGp = async (req, rest) => {
  const { dataFormJson } = req.body;
  const result = await _gpdao.insert(JSON.parse(dataFormJson));
  /* Aqui logica de comportamiento de acuerdo a la respuesta del acceso a datos */
};

module.exports = { saveGp };
