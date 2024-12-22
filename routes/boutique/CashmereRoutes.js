// routes/cashmereRoutes.js
const express = require('express');
const {
    createCashmere,
    getAllCashmeres,
    getCashmereById,
    updateCashmere,
    deleteCashmere
} = require('../../controllers/boutique/CashmereController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

// Route to create a new Cashmere item
router.post('/',isLogined , createCashmere);

// Route to get all Cashmere items
router.get('/', getAllCashmeres);

// Route to get a single Cashmere item by ID
router.get('/:id', getCashmereById);

// Route to update a Cashmere item by ID
router.put('/:id', updateCashmere);

// Route to delete a Cashmere item by ID
router.delete('/:id', deleteCashmere);

module.exports = router;
