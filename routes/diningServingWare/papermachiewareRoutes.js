const express = require('express');
const router = express.Router();
const papermachiewareController = require('../../controllers/diningServingWare/papermachiewareController');
const isLogined = require('../../middlewares/auth');

// Create Papermachieware
router.post('/',isLogined , papermachiewareController.createPapermachieware);

// Get all Papermachieware items
router.get('/', papermachiewareController.getAllPapermachieware);

// Get Papermachieware item by ID
router.get('/:id', papermachiewareController.getPapermachiewareById);

// Update Papermachieware
router.put('/:id', papermachiewareController.updatePapermachieware);

// Delete Papermachieware
router.delete('/:id', papermachiewareController.deletePapermachieware);

module.exports = router;
