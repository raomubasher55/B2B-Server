// routes/franchiseRoutes.js
const express = require('express');
const router = express.Router();
const franchiseController = require('../controllers/franchiseController');
const authMiddleware = require('../middlewares/auth'); 

router.use(authMiddleware);

// Create a new franchise application
router.post('/applications', franchiseController.createApplication);

// Get all franchise applications for the logged-in user
router.get('/applications', franchiseController.getApplications);

// Get a single franchise application by ID
router.get('/applications/:id', franchiseController.getApplicationById);

// Update a franchise application by ID
router.put('/applications/:id', franchiseController.updateApplication);

// Delete a franchise application by ID
router.delete('/applications/:id', franchiseController.deleteApplication);

module.exports = router;
