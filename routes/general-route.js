const express = require("express");
const { saveGp } = require("../Controllers/gp-controller");
const {
  getMisiones,
  getDistritos,
  getIglesias,
  getTipoGp,
} = require("../Controllers/select-controller");
const router = express.Router();

router.use("/gp/save", saveGp);
router.use("/mision", getMisiones);
router.use("/distrito/:idMision", getDistritos);
router.use("/iglesia/:idDistrito", getIglesias);
router.use("/gp/tipo", getTipoGp);

module.exports = router;
