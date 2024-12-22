const KashmiriJacket = require('../../models/Boutique/KashmiriJacket');

// Create a new Kashmiri Jacket
exports.createKashmiriJacket = async (req, res) => {
    try {
        const kashmiriJacket = new KashmiriJacket({
            ...req.body,
            userId: req.user.user._id,
        });
        await kashmiriJacket.save();
        res.status(201).json({ success: true, data: kashmiriJacket });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all Kashmiri Jackets
exports.getAllKashmiriJackets = async (req, res) => {
    try {
        const jackets = await KashmiriJacket.find();
        res.status(200).json({ success: true, data: jackets });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Kashmiri Jacket by ID
exports.getKashmiriJacketById = async (req, res) => {
    try {
        const jacket = await KashmiriJacket.findById(req.params.id);
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, data: jacket });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a Kashmiri Jacket by ID
exports.updateKashmiriJacket = async (req, res) => {
    try {
        const jacket = await KashmiriJacket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, data: jacket });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a Kashmiri Jacket by ID
exports.deleteKashmiriJacket = async (req, res) => {
    try {
        const jacket = await KashmiriJacket.findByIdAndDelete(req.params.id);
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, message: 'Kashmiri Jacket deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
