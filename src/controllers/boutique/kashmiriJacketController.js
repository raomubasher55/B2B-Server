const KashmiriJacket = require('../../models/Boutique/KashmiriJacket');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new Kashmiri Jacket
exports.createKashmiriJacket = asyncHandler(async (req, res) => {
        const kashmiriJacket = new KashmiriJacket({...req.body,userId: req.user.user._id });
        await kashmiriJacket.save();
        res.status(201).json({ success: true, data: kashmiriJacket });
});

// Get all Kashmiri Jackets
exports.getAllKashmiriJackets = asyncHandler(async (req, res) => {
        const jackets = await KashmiriJacket.find();
        res.status(200).json({ success: true, data: jackets });
});

// Get a single Kashmiri Jacket by ID
exports.getKashmiriJacketById = asyncHandler(async (req, res) => {
        const jacket = await KashmiriJacket.findById(req.params.id);
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, data: jacket });
});

// Update a Kashmiri Jacket by ID
exports.updateKashmiriJacket = asyncHandler(async (req, res) => {
        const jacket = await KashmiriJacket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, data: jacket });
});

// Delete a Kashmiri Jacket by ID
exports.deleteKashmiriJacket =asyncHandler( async (req, res) => {
        const jacket = await KashmiriJacket.findByIdAndDelete(req.params.id);
        if (!jacket) {
            return res.status(404).json({ success: false, message: 'Kashmiri Jacket not found' });
        }
        res.status(200).json({ success: true, message: 'Kashmiri Jacket deleted successfully' });
});
