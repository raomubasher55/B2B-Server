const Cashmere = require('../../models/Boutique/Cashmere');

// Create a new Cashmere item
exports.createCashmere = async (req, res) => {
    try {
        const cashmere = new Cashmere({
            ...req.body,
            userId: req.user.user._id,
        });
        await cashmere.save(); 
        res.status(201).json({ success: true, data: cashmere });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all Cashmere items
exports.getAllCashmeres = async (req, res) => {
    try {
        const cashmeres = await Cashmere.find();
        res.status(200).json({ success: true, data: cashmeres });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Cashmere item by ID
exports.getCashmereById = async (req, res) => {
    try {
        const cashmere = await Cashmere.findById(req.params.id);
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, data: cashmere });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a Cashmere item by ID
exports.updateCashmere = async (req, res) => {
    try {
        const cashmere = await Cashmere.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, data: cashmere });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a Cashmere item by ID
exports.deleteCashmere = async (req, res) => {
    try {
        const cashmere = await Cashmere.findByIdAndDelete(req.params.id);
        if (!cashmere) {
            return res.status(404).json({ success: false, message: "Cashmere not found" });
        }
        res.status(200).json({ success: true, message: "Cashmere deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
