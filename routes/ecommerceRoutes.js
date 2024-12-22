
const express = require("express");
const router = express.Router();
const {
  createECommerce,
  getAllECommerce,
  getECommerceById,
  updateECommerce,
  deleteECommerce,
} = require("../controllers/eCommerceController"); 
const isLogined = require('../middlewares/auth');


router.post("/ecommerce",isLogined , createECommerce);
router.get("/ecommerce", getAllECommerce);
router.get("/ecommerce/:id", getECommerceById);
router.put("/ecommerce/:id", updateECommerce);
router.delete("/ecommerce/:id", deleteECommerce);


module.exports = router;