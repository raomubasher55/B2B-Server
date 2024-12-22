const Silk = require('../../models/Boutique/Silk'); 

// Create a new Silk item
exports.createSilk = async (req, res) => {
    try {
        const silk = new Silk({
            ...req.body,
            userId: req.user.user._id,
        });
        await silk.save();
        res.status(201).json({ success: true, data: silk });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all Silk items
exports.getAllSilks = async (req, res) => {
    try {
        const silks = await Silk.find();
        res.status(200).json({ success: true, data: silks });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Silk item by ID
exports.getSilkById = async (req, res) => {
    try {
        const silk = await Silk.findById(req.params.id);
        if (!silk) {
            return res.status(404).json({ success: false, message: "Silk not found" });
        }
        res.status(200).json({ success: true, data: silk });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a Silk item by ID
exports.updateSilk = async (req, res) => {
    try {
        const silk = await Silk.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!silk) {
            return res.status(404).json({ success: false, message: "Silk not found" });
        }
        res.status(200).json({ success: true, data: silk });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a Silk item by ID
exports.deleteSilk = async (req, res) => {
    try {
        const silk = await Silk.findByIdAndDelete(req.params.id);
        if (!silk) {
            return res.status(404).json({ success: false, message: "Silk not found" });
        }
        res.status(200).json({ success: true, message: "Silk deleted successfully" });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
