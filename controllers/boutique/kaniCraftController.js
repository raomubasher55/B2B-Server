const KaniCraft = require('../../models/Boutique/KaniCraft');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new KaniCraft item
exports.createKaniCraft = asyncHandler(async (req, res) => {
        const kaniCraft = new KaniCraft({...req.body,userId: req.user.user._id});
        await kaniCraft.save();
        res.status(201).json({success: true,kaniCraft});
});

// Get all KaniCraft items
exports.getAllKaniCrafts = asyncHandler(async (req, res) => {
    try {
        const kaniCrafts = await KaniCraft.find();
        res.status(200).json({
            success: true,
            data: kaniCrafts
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Get a single KaniCraft item by ID
exports.getKaniCraftById = asyncHandler(async (req, res) => {
    try {
        const kaniCraft = await KaniCraft.findById(req.params.id);
        if (!kaniCraft) {
            return res.status(404).json({
                success: false,
                message: "Kani Craft item not found"
            });
        }
        res.status(200).json({
            success: true,
            data: kaniCraft
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Update a KaniCraft item by ID
exports.updateKaniCraft = asyncHandler(async (req, res) => {
    try {
        const kaniCraft = await KaniCraft.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!kaniCraft) {
            return res.status(404).json({
                success: false,
                message: "Kani Craft item not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Kani Craft item updated successfully",
            data: kaniCraft
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});

// Delete a KaniCraft item by ID
exports.deleteKaniCraft = asyncHandler(async (req, res) => {
    try {
        const kaniCraft = await KaniCraft.findByIdAndDelete(req.params.id);
        if (!kaniCraft) {
            return res.status(404).json({
                success: false,
                message: "Kani Craft item not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Kani Craft item deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});
