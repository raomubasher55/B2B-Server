const express = require('express');
const router = express.Router();
const jeweledWallHangingController = require('../../controllers/interiorDecor/jeweledWallHangingController');
const isLogined = require('../../middlewares/auth');

// Create Jeweled Wall Hanging
router.post('/',isLogined , jeweledWallHangingController.createJeweledWallHanging);

// Get all Jeweled Wall Hangings
router.get('/', jeweledWallHangingController.getAllJeweledWallHangings);

// Get Jeweled Wall Hanging by ID
router.get('/:id', jeweledWallHangingController.getJeweledWallHangingById);

// Update Jeweled Wall Hanging
router.put('/:id', jeweledWallHangingController.updateJeweledWallHanging);

// Delete Jeweled Wall Hanging
router.delete('/:id', jeweledWallHangingController.deleteJeweledWallHanging);

module.exports = router;
