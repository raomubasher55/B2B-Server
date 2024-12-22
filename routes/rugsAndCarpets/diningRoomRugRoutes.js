const express = require('express');
const {
  createRug,
  getAllRugs,
  getRugById,
  updateRug,
  deleteRug
} = require('../../controllers/rugsAndCarpets/DiningRoomRugController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

// Routes for Dining Room Rugs
router.post('/',isLogined , createRug); // Create a new rug
router.get('/', getAllRugs); // Get all rugs
router.get('/:id', getRugById); // Get a specific rug by ID
router.put('/:id', updateRug); // Update a rug
router.delete('/:id', deleteRug); // Delete a rug

module.exports = router;
