const express = require('express');
const router = express.Router();
const tapestryController = require('../../controllers/interiorDecor/tapestryController');
const isLogined = require('../../middlewares/auth');

// Create Tapestry
router.post('/',isLogined , tapestryController.createTapestry);

// Get all Tapestries
router.get('/', tapestryController.getAllTapestries);

// Get Tapestry by ID
router.get('/:id', tapestryController.getTapestryById);

// Update Tapestry
router.put('/:id', tapestryController.updateTapestry);

// Delete Tapestry
router.delete('/:id', tapestryController.deleteTapestry);

module.exports = router;
