const express = require('express');
const router = express.Router();
const brickAndMortarController = require('../controllers/BrickAndMortarController');
const isLogined = require('../middlewares/auth'); 

// Create a new application form
router.post('/', isLogined, brickAndMortarController.createBrickAndMortar);

// Get all application forms submitted by the logged-in user
router.get('/', isLogined, brickAndMortarController.getUserBrickAndMortars);

// Get a specific application form by ID
router.get('/:id', isLogined, brickAndMortarController.getBrickAndMortarById);

// Update an application form by ID
router.put('/:id', isLogined, brickAndMortarController.updateBrickAndMortar);

// Delete an application form by ID
router.delete('/:id', isLogined, brickAndMortarController.deleteBrickAndMortar);

module.exports = router;
