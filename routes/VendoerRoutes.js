const express = require('express');
const router = express.Router();
const VendorController = require('../controllers/VendorController');
const isLogined = require('../middlewares/auth');

router.post('/', isLogined, VendorController.createVendor);
router.get('/', isLogined, VendorController.getAllVendors);
router.get('/:id', isLogined, VendorController.getVendorById);
router.put('/:id', isLogined, VendorController.updateVendor);
router.delete('/:id', isLogined, VendorController.deleteVendor);

module.exports = router;
