const express = require('express');
const router = express.Router();
const roomDividerScreenController = require('../../controllers/interiorDecor/roomDividerScreenController');
const isLogined = require('../../middlewares/auth');

// Create Room Divider Screen
router.post('/',isLogined , roomDividerScreenController.createRoomDividerScreen);

// Get all Room Divider Screens
router.get('/', roomDividerScreenController.getAllRoomDividerScreens);

// Get Room Divider Screen by ID
router.get('/:id', roomDividerScreenController.getRoomDividerScreenById);

// Update Room Divider Screen
router.put('/:id', roomDividerScreenController.updateRoomDividerScreen);

// Delete Room Divider Screen
router.delete('/:id', roomDividerScreenController.deleteRoomDividerScreen);

module.exports = router;
