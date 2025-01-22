const express = require('express');
const router = express.Router();
const kaniCraftController = require('../../controllers/boutique/kaniCraftController');
const isLogined = require('../../middlewares/auth');


// Create a new KaniCraft item
router.post('/',isLogined , kaniCraftController.createKaniCraft);

// Get all KaniCraft items
router.get('/', kaniCraftController.getAllKaniCrafts);

// Get a single KaniCraft item by ID
router.get('/:id', kaniCraftController.getKaniCraftById);

// Update a KaniCraft item by ID
router.put('/:id', kaniCraftController.updateKaniCraft);

// Delete a KaniCraft item by ID
router.delete('/:id', kaniCraftController.deleteKaniCraft);

module.exports = router;
