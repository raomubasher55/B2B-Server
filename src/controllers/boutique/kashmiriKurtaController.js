const KashmiriKurta = require('../../models/Boutique/kashmiriKurta');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new Kashmiri Kurta
exports.createKashmiriKurta = asyncHandler(async (req, res) => {
    try {
        const kashmiriKurta = new KashmiriKurta({
            ...req.body,
            userId: req.user.user._id,
        });
        await kashmiriKurta.save();
        res.status(201).json({ success: true, data: kashmiriKurta });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Get all Kashmiri Kurtas
exports.getAllKashmiriKurtas =asyncHandler( async (req, res) => {
    try {
        const kurtas = await KashmiriKurta.find();
        res.status(200).json({ success: true, data: kurtas });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Get a single Kashmiri Kurta by ID
exports.getKashmiriKurtaById =asyncHandler( async (req, res) => {
    try {
        const kurta = await KashmiriKurta.findById(req.params.id);
        if (!kurta) {
            return res.status(404).json({ success: false, message: 'Kashmiri Kurta not found' });
        }
        res.status(200).json({ success: true, data: kurta });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Update a Kashmiri Kurta by ID
exports.updateKashmiriKurta = asyncHandler(async (req, res) => {
    try {
        const kurta = await KashmiriKurta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!kurta) {
            return res.status(404).json({ success: false, message: 'Kashmiri Kurta not found' });
        }
        res.status(200).json({ success: true, data: kurta });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Delete a Kashmiri Kurta by ID
exports.deleteKashmiriKurta = asyncHandler(async (req, res) => {
    try {
        const kurta = await KashmiriKurta.findByIdAndDelete(req.params.id);
        if (!kurta) {
            return res.status(404).json({ success: false, message: 'Kashmiri Kurta not found' });
        }
        res.status(200).json({ success: true, message: 'Kashmiri Kurta deleted successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
