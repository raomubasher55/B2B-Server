const express = require('express');
const router = express.Router();
const silverwareController = require('../../controllers/diningServingWare/silverwareController');
const isLogined = require('../../middlewares/auth');

// Create Silverware
router.post('/',isLogined , silverwareController.createSilverware);

// Get all Silverware
router.get('/', silverwareController.getAllSilverware);

// Get Silverware by ID
router.get('/:id', silverwareController.getSilverwareById);

// Update Silverware
router.put('/:id', silverwareController.updateSilverware);

// Delete Silverware
router.delete('/:id', silverwareController.deleteSilverware);

module.exports = router;
