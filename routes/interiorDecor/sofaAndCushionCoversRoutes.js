const express = require('express');
const router = express.Router();
const sofaAndCushionCoversController = require('../../controllers/interiorDecor/sofaAndCushionCoversController');
const isLogined = require('../../middlewares/auth');

// Create a new Sofa and Cushion Cover
router.post('/',isLogined , sofaAndCushionCoversController.createSofaAndCushionCover);

// Get all Sofa and Cushion Covers
router.get('/', sofaAndCushionCoversController.getAllSofaAndCushionCovers);

// Get Sofa and Cushion Cover by ID
router.get('/:id', sofaAndCushionCoversController.getSofaAndCushionCoverById);

// Update Sofa and Cushion Cover by ID
router.put('/:id', sofaAndCushionCoversController.updateSofaAndCushionCover);

// Delete Sofa and Cushion Cover by ID
router.delete('/:id', sofaAndCushionCoversController.deleteSofaAndCushionCover);

module.exports = router;
