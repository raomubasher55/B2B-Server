const express = require('express');
const router = express.Router();
const consignmentBusinessController = require('../controllers/ConsignmentBusinessController');
const isLogined = require('../middlewares/auth');

// Create a new consignment business application
router.post('/', isLogined, consignmentBusinessController.createConsignmentBusiness);

// Get all consignment business applications for the logged-in user
router.get('/', isLogined, consignmentBusinessController.getUserConsignmentBusinesses);

// Get a specific consignment business application by ID for the logged-in user
router.get('/:id', isLogined, consignmentBusinessController.getConsignmentBusinessById);

// Other routes like update and delete can be similarly protected by authentication middleware

module.exports = router;
