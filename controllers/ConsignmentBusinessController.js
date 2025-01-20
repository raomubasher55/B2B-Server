const ConsignmentBusiness = require('../models/ConsignmentBusiness');
const asyncHandler = require('../utils/asyncHandler');

// Create a new consignment business application
exports.createConsignmentBusiness = asyncHandler(async (req, res) => {
        // Ensure the user is authenticated and get the user ID
        const userId = req.user._id; // Assuming user data is available through authentication (e.g., via JWT)

        const formData = req.body;
        const newApplication = new ConsignmentBusiness({
            ...formData, // Spread the form data to populate fields
            user: userId // Include the user ID
        });

        await newApplication.save();
        res.status(201).json({
            message: 'Consignment business application submitted successfully',
            applicationForm: newApplication
        });
  });

// Get all consignment business applications for the logged-in user
exports.getUserConsignmentBusinesses = asyncHandler(async (req, res) => {
        const userId = req.user._id; // Get the user ID from the authentication

        const applications = await ConsignmentBusiness.find({ user: userId });
        res.status(200).json(applications);
  });

// Get a specific consignment business application by ID for the logged-in user
exports.getConsignmentBusinessById = asyncHandler(async (req, res) => {
        const userId = req.user._id; // Get the user ID from the authentication

        const application = await ConsignmentBusiness.findOne({ _id: req.params.id, user: userId });
        if (!application) {
            return res.status(404).json({ message: 'Application not found or unauthorized' });
        }
        res.status(200).json(application);
    });
