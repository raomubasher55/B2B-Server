const express = require('express');
const router = express.Router();
const copperwareController = require('../../controllers/diningServingWare/copperwareController');
const isLogined = require('../../middlewares/auth');

// Create Copperware
router.post('/',isLogined , copperwareController.createCopperware);

// Get all Copperware
router.get('/', copperwareController.getAllCopperware);

// Get Copperware by ID
router.get('/:id', copperwareController.getCopperwareById);

// Update Copperware
router.put('/:id', copperwareController.updateCopperware);

// Delete Copperware
router.delete('/:id', copperwareController.deleteCopperware);

module.exports = router;
