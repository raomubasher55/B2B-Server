const BrickAndMortar = require('../models/BrickAndMortar');
const asyncHandler = require('../utils/asyncHandler');

// Create a new application form
exports.createBrickAndMortar = asyncHandler(async (req, res) => {
        const formData = req.body;
        formData.userId = req.user._id; // Associate the form with the logged-in user

        const newApplication = new BrickAndMortar(formData);
        await newApplication.save();

        res.status(201).json({
            message: 'Application form submitted successfully',
            applicationForm: newApplication
        });
   });

// Get all application forms submitted by the logged-in user
exports.getUserBrickAndMortars = asyncHandler(async (req, res) => {
        const forms = await BrickAndMortar.find({ userId: req.user._id });
        res.status(200).json(forms);
    });

// Get a single application form by ID
exports.getBrickAndMortarById = asyncHandler(async (req, res) => {
        const form = await BrickAndMortar.findById(req.params.id);

        if (!form) {
            return res.status(404).json({ message: 'Application form not found' });
        }

        res.status(200).json(form);
   });

// Update an application form
exports.updateBrickAndMortar = asyncHandler(async (req, res) => {
        const form = await BrickAndMortar.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!form) {
            return res.status(404).json({ message: 'Application form not found' });
        }

        res.status(200).json({
            message: 'Application form updated successfully',
            applicationForm: form
        });
        res.status(500).json({ message: error.message });
    });

// Delete an application form
exports.deleteBrickAndMortar = asyncHandler(async (req, res) => {
        const form = await BrickAndMortar.findByIdAndDelete(req.params.id);

        if (!form) {
            return res.status(404).json({ message: 'Application form not found' });
        }

        res.status(200).json({ message: 'Application form deleted successfully' });
});
