const Cashmere = require('../../models/Boutique/Cashmere');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new Cashmere item
exports.createCashmere = asyncHandler(async (req, res) => {
        const cashmere = new Cashmere({...req.body, userId: req.user.user._id});
        await cashmere.save(); 
        res.status(201).json({ success: true, data: cashmere });
});

// Get all Cashmere items
exports.getAllCashmeres = asyncHandler(async (req, res) => { 
        const cashmeres = await Cashmere.find();
        res.status(200).json({ success: true, data: cashmeres });
});

// Get a single Cashmere item by ID
exports.getCashmereById = asyncHandler(async (req, res) => {
  
        const cashmere = await Cashmere.findById(req.params.id);
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, data: cashmere });
   
});

// Update a Cashmere item by ID
exports.updateCashmere = asyncHandler(async (req, res) => {
        const cashmere = await Cashmere.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, data: cashmere });
});

// Delete a Cashmere item by ID
exports.deleteCashmere = asyncHandler(async (req, res) => {
        const cashmere = await Cashmere.findByIdAndDelete(req.params.id);
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, message: "Cashmere deleted successfully" });
});
