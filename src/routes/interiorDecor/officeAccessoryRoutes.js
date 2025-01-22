const express = require('express');
const router = express.Router();
const officeAccessoryController = require('../../controllers/interiorDecor/officeAccessoryController');
const isLogined = require('../../middlewares/auth');

// Create Office Accessory
router.post('/',isLogined , officeAccessoryController.createOfficeAccessory);

// Get all Office Accessories
router.get('/', officeAccessoryController.getAllOfficeAccessories);

// Get Office Accessory by ID
router.get('/:id', officeAccessoryController.getOfficeAccessoryById);

// Update Office Accessory
router.put('/:id', officeAccessoryController.updateOfficeAccessory);

// Delete Office Accessory
router.delete('/:id', officeAccessoryController.deleteOfficeAccessory);

module.exports = router;
