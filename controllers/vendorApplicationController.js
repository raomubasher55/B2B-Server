const VendorApplication = require('../models/VendorApplication');
const asyncHandler = require('../utils/asyncHandler');

// Create Vendor Application
exports.createVendorApplication = asyncHandler(async (req, res) => {
        const vendorApplication = new VendorApplication({ ...req.body,user: req.user._id});
        const savedApplication = await vendorApplication.save();
        res.status(201).json(savedApplication);
   });

// Get All Vendor Applications
exports.getAllVendorApplications =asyncHandler( async (req, res) => {
        const applications = await VendorApplication.find({ user: req.user._id });
        res.status(200).json(applications);
   });

// Get Vendor Application by ID
exports.getVendorApplicationById =asyncHandler (async (req, res) => {
        const application = await VendorApplication.findOne({ _id: req.params.id, user: req.user._id });
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json(application);
   });

// Update Vendor Application
exports.updateVendorApplication = asyncHandler(async (req, res) => {
        const updatedApplication = await VendorApplication.findOneAndUpdate({ _id: req.params.id, user: req.user._id },req.body,{ new: true });
        if (!updatedApplication) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json(updatedApplication);
   });

// Delete Vendor Application
exports.deleteVendorApplication = asyncHandler(async (req, res) => {
        const deletedApplication = await VendorApplication.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!deletedApplication) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json({ message: 'Application deleted successfully' });
   });
