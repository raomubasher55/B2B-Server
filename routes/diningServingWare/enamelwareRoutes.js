const express = require('express');
const router = express.Router();
const enamelwareController = require('../../controllers/diningServingWare/enamelwareController');
const isLogined = require('../../middlewares/auth');

// Create Enamelware
router.post('/',isLogined , enamelwareController.createEnamelware);

// Get all Enamelware items
router.get('/', enamelwareController.getAllEnamelware);

// Get Enamelware item by ID
router.get('/:id', enamelwareController.getEnamelwareById);

// Update Enamelware
router.put('/:id', enamelwareController.updateEnamelware);

// Delete Enamelware
router.delete('/:id', enamelwareController.deleteEnamelware);

module.exports = router;
