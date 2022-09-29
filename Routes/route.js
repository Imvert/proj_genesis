const express = require("express");
const { saveGp } = require("../Controllers/GpController");
const {
  getMisiones,
  getDistritos,
  getIglesias,
  getTipoGp,
} = require("../Controllers/SelectsController");

const router = express.Router();
router.use("/gp/save", saveGp);
router.use("/mision", getMisiones);
router.use("/distrito/:idMision", getDistritos);
router.use("/iglesia/:idDistrito", getIglesias);
router.use("/gp/tipo", getTipoGp);

module.exports = router;
