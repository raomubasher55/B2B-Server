const express = require('express');
const router = express.Router();
const walnutwareController = require('../../controllers/diningServingWare/walnutwareController');
const isLogined = require('../../middlewares/auth');

// Create Walnutware
router.post('/',isLogined , walnutwareController.createWalnutware);

// Get all Walnutware items
router.get('/', walnutwareController.getAllWalnutware);

// Get Walnutware item by ID
router.get('/:id', walnutwareController.getWalnutwareById);

// Update Walnutware
router.put('/:id', walnutwareController.updateWalnutware);

// Delete Walnutware
router.delete('/:id', walnutwareController.deleteWalnutware);

module.exports = router;
