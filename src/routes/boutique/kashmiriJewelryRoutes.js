const express = require("express");
const router = express.Router();
const {
  createKashmiriJewelry,
  getAllKashmiriJewelry,
  getKashmiriJewelryById,
  updateKashmiriJewelry,
  deleteKashmiriJewelry,
} = require("../../controllers/boutique/kashmiriJewelryController");
const isLogined = require("../../middlewares/auth");

// Routes
router.post("/", isLogined, createKashmiriJewelry);
router.get("/", getAllKashmiriJewelry);
router.get("/:id", getKashmiriJewelryById);
router.put("/:id", updateKashmiriJewelry);
router.delete("/:id", deleteKashmiriJewelry);

module.exports = router;
