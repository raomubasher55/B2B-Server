const express = require('express');
const {
    getPapierMacheItems,
    createPapierMacheItem,
    updatePapierMacheItem,
    deletePapierMacheItem
} = require('../../controllers/interiorDecor/papierMacheController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

// Routes for Papier-Mâché
router.get('/',isLogined , getPapierMacheItems); // Get all items
router.post('/', createPapierMacheItem); // Create a new item
router.put('/:id', updatePapierMacheItem); // Update an item by ID
router.delete('/:id', deletePapierMacheItem); // Delete an item by ID

module.exports = router;
