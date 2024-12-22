const KashmiriJewelry = require('../../models/Boutique/kashmiriJewelry');

// Create a new Kashmiri Jewelry
exports.createKashmiriJewelry = async (req, res) => {
    try {
        const jewelry = new KashmiriJewelry({
            ...req.body,
            userId: req.user.user._id,
        });
        await jewelry.save();
        res.status(201).json({ success: true, data: jewelry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all Kashmiri Jewelry items
exports.getAllKashmiriJewelry = async (req, res) => {
    try {
        const jewelry = await KashmiriJewelry.find();
        res.status(200).json({ success: true, data: jewelry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Kashmiri Jewelry item by ID
exports.getKashmiriJewelryById = async (req, res) => {
    try {
        const jewelry = await KashmiriJewelry.findById(req.params.id);
        if (!jewelry) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jewelry not found' });
        }
        res.status(200).json({ success: true, data: jewelry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a Kashmiri Jewelry item by ID
exports.updateKashmiriJewelry = async (req, res) => {
    try {
        const jewelry = await KashmiriJewelry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!jewelry) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jewelry not found' });
        }
        res.status(200).json({ success: true, data: jewelry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a Kashmiri Jewelry item by ID
exports.deleteKashmiriJewelry = async (req, res) => {
    try {
        const jewelry = await KashmiriJewelry.findByIdAndDelete(req.params.id);
        if (!jewelry) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jewelry not found' });
        }
        res.status(200).json({ success: true, message: 'Kashmiri Jewelry deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
