const Boutique = require('../../models/Boutique/Pashmina');
const asyncHandler = require('../../utils/asyncHandler');

exports.createBoutique = asyncHandler(async (req, res) => {
    try {
        const boutique = new Boutique({
            ...req.body,
            userId: req.user.user._id,
        });
        await boutique.save();
        res.status(201).json({
            success: true,
            message: "Boutique created successfully",
            data: boutique
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Get all Boutique items
exports.getAllBoutiques =asyncHandler( async (req, res) => {
    try {
        const boutiques = await Boutique.find();
        res.status(200).json({
            success: true,
            data: boutiques
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

exports.getBoutiqueById = asyncHandler(async (req, res) => {
    try {
        const boutique = await Boutique.findById(req.params.id);
        if (!boutique) {
            return res.status(404).json({
                success: false,
                message: "Boutique not found"
            });
        }
        res.status(200).json({
            success: true,
            data: boutique
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

exports.updateBoutique = asyncHandler(async (req, res) => {
    try {
        const boutique = await Boutique.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!boutique) {
            return res.status(404).json({
                success: false,
                message: "Boutique not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Boutique updated successfully",
            data: boutique
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

exports.deleteBoutique = asyncHandler(async (req, res) => {
    try {
        const boutique = await Boutique.findByIdAndDelete(req.params.id);
        if (!boutique) {
            return res.status(404).json({
                success: false,
                message: "Boutique not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Boutique deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});
