const _gpdao = require("../Daos/gp-dao");

const saveGp = async (req, res) => {
  const result = await _gpdao.insert(JSON.stringify(req.body));
  res.json(result);
};

module.exports = { saveGp };
