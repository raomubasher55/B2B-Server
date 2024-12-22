const KashmiriBagsAndPurse = require('../../models/Boutique/KashmiriBagsAndPurse');

// Create a new KashmiriBagsAndPurse item
exports.createBag = async (req, res) => {
    try {
        const bag = new KashmiriBagsAndPurse({
            ...req.body,
            userId: req.user.user._id,
        });
        await bag.save();
        res.status(201).json({ success: true, data: bag });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all KashmiriBagsAndPurse items
exports.getAllBags = async (req, res) => {
    try {
        const bags = await KashmiriBagsAndPurse.find();
        res.status(200).json({ success: true, data: bags });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single KashmiriBagsAndPurse item by ID
exports.getBagById = async (req, res) => {
    try {
        const bag = await KashmiriBagsAndPurse.findById(req.params.id);
        if (!bag) {
            return res.status(404).json({ success: false, message: "KashmiriBagsAndPurse not found" });
        }
        res.status(200).json({ success: true, data: bag });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a KashmiriBagsAndPurse item by ID
exports.updateBag = async (req, res) => {
    try {
        const bag = await KashmiriBagsAndPurse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bag) {
            return res.status(404).json({ success: false, message: "KashmiriBagsAndPurse not found" });
        }
        res.status(200).json({ success: true, data: bag });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a KashmiriBagsAndPurse item by ID
exports.deleteBag = async (req, res) => {
    try {
        const bag = await KashmiriBagsAndPurse.findByIdAndDelete(req.params.id);
        if (!bag) {
            return res.status(404).json({ success: false, message: "KashmiriBagsAndPurse not found" });
        }
        res.status(200).json({ success: true, message: "KashmiriBagsAndPurse deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
