const ParlorRoomRug = require('../../models/RugsAndCarpets/ParlorRoomRug');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new rug
const createRug = asyncHandler(async (req, res) => {
        const newRug = new ParlorRoomRug({
            ...req.body,
            userId: req.user.user._id,
        });
        await newRug.save();
        res.status(201).json({
            success: true,
            message: 'Parlor Room Rug created successfully',
            rug: newRug
        });
   
});

// Get all rugs
const getAllRugs = asyncHandler(async (req, res) => {
    
        const rugs = await ParlorRoomRug.find();
        res.status(200).json({
            success: true,
            message: 'Rugs fetched successfully',
            rugs
        });
  
});

// Get a specific rug by ID
const getRugById = asyncHandler(async (req, res) => {
    try {
        const rug = await ParlorRoomRug.findById(req.params.id);
        if (!rug) {
            return res.status(404).json({ success: false, message: 'Rug not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Rug fetched successfully',
            rug
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching rug', error });
    }
});

// Update a rug
const updateRug = asyncHandler(async (req, res) => {
    try {
        const rug = await ParlorRoomRug.findById(req.params.id);
        if (!rug) {
            return res.status(404).json({ success: false, message: 'Rug not found' });
        }
        await rug.updateOne(req.body);
        res.status(200).json({
            success: true,
            message: 'Rug updated successfully',
            rug
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating rug', error });
    }
});

// Delete a rug
const deleteRug = asyncHandler(async (req, res) => {
        const rug = await ParlorRoomRug.findByIdAndDelete(req.params.id);
        if (!rug) {
            return res.status(404).json({ success: false, message: 'Rug not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Rug deleted successfully'
        });
   
});

module.exports = { createRug, getAllRugs, getRugById, updateRug, deleteRug };
