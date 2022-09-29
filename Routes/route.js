const express = require("express");
const { saveGp } = require("../Controllers/GpController");

const router = express.Router();
router.use("/save", saveGp);

module.exports = router;
