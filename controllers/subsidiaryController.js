const Subsidiary = require('../models/Subsidiary');
const asyncHandler = require('../utils/asyncHandler');

// Create Subsidiary
exports.createSubsidiary = asyncHandler(async (req, res) => {
        const { 
            applicantName, 
            contactEmail, 
            contactPhone, 
            companyName, 
            position, 
            countryOfResidence, 
            website, 
            businessExperience, 
            currentBusinessStructure, 
            annualRevenue, 
            proposedLocation, 
            financialDetails 
        } = req.body;

        const subsidiary = new Subsidiary({
            applicantName,
            contactEmail,
            contactPhone,
            companyName,
            position,
            countryOfResidence,
            website,
            businessExperience,
            currentBusinessStructure,
            annualRevenue,
            proposedLocation,
            financialDetails,
            user: req.user._id
        });

        const savedSubsidiary = await subsidiary.save();
        res.status(201).json(savedSubsidiary);
    });

// Get All Subsidiaries
exports.getAllSubsidiaries =asyncHandler( async (req, res) => {
        const subsidiaries = await Subsidiary.find({ user: req.user._id });
        res.status(200).json(subsidiaries);
 });

// Get Subsidiary by ID
exports.getSubsidiaryById = asyncHandler(async (req, res) => {
        const subsidiary = await Subsidiary.findOne({ _id: req.params.id, user: req.user._id });
        if (!subsidiary) return res.status(404).json({ message: 'Subsidiary not found' });
        res.status(200).json(subsidiary);
    });

// Update Subsidiary
exports.updateSubsidiary = asyncHandler(async (req, res) => {
        const updatedSubsidiary = await Subsidiary.findOneAndUpdate({ _id: req.params.id, user: req.user._id },req.body,{ new: true });
        if (!updatedSubsidiary) return res.status(404).json({ message: 'Subsidiary not found' });
        res.status(200).json(updatedSubsidiary);
   });

// Delete Subsidiary
exports.deleteSubsidiary = asyncHandler(async (req, res) => {
        const deletedSubsidiary = await Subsidiary.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!deletedSubsidiary) return res.status(404).json({ message: 'Subsidiary not found' });
        res.status(200).json({ message: 'Subsidiary deleted successfully' });
   });