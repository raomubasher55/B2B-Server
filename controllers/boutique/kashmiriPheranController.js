const KashmiriPheran = require('../../models/Boutique/kashmiriPheran');

// Create a new Kashmiri Pheran
exports.createKashmiriPheran = async (req, res) => {
    try {
        const kashmiriPheran = new KashmiriPheran({
            ...req.body,
            userId: req.user.user._id,
        });
        await kashmiriPheran.save();
        res.status(201).json({ success: true, data: kashmiriPheran });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all Kashmiri Pherans
exports.getAllKashmiriPherans = async (req, res) => {
    try {
        const pherans = await KashmiriPheran.find();
        res.status(200).json({ success: true, data: pherans });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Kashmiri Pheran by ID
exports.getKashmiriPheranById = async (req, res) => {
    try {
        const pheran = await KashmiriPheran.findById(req.params.id);
        if (!pheran) {
            return res.status(404).json({ success: false, message: 'Kashmiri Pheran not found' });
        }
        res.status(200).json({ success: true, data: pheran });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a Kashmiri Pheran by ID
exports.updateKashmiriPheran = async (req, res) => {
    try {
        const pheran = await KashmiriPheran.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pheran) {
            return res.status(404).json({ success: false, message: 'Kashmiri Pheran not found' });
        }
        res.status(200).json({ success: true, data: pheran });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a Kashmiri Pheran by ID
exports.deleteKashmiriPheran = async (req, res) => {
    try {
        const pheran = await KashmiriPheran.findByIdAndDelete(req.params.id);
        if (!pheran) {
            return res.status(404).json({ success: false, message: 'Kashmiri Pheran not found' });
        }
        res.status(200).json({ success: true, message: 'Kashmiri Pheran deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
