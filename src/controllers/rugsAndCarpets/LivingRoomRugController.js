const LivingRoomRug = require('../../models/RugsAndCarpets/LivingRoomRug');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new rug
const createRug =asyncHandler(async (req, res) => {
        const newRug = new LivingRoomRug({
            ...req.body,
            userId: req.user.user._id,
        });
        
        // Validate and save the rug
        await newRug.save();
        
        res.status(201).json({
            success: true,
            message: 'Rug created successfully',
            rug: newRug
        });
});

// Get all rugs
const getAllRugs = asyncHandler(async (req, res) => {
        const rugs = await LivingRoomRug.find();
        res.status(200).json({
            success: true,
            message: 'Rugs fetched successfully',
            rugs
        });
  
});

// Get a specific rug by ID
const getRugById =asyncHandler( async (req, res) => {
        const rug = await LivingRoomRug.findById(req.params.id);
        if (!rug) {
            return res.status(404).json({
                success: false,
                message: 'Rug not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Rug fetched successfully',
            rug
        });
  
});

// Update a rug
const updateRug = asyncHandler(async (req, res) => {
        const rug = await LivingRoomRug.findById(req.params.id);
        if (!rug) {
            return res.status(404).json({
                success: false,
                message: 'Rug not found'
            });
        }
        await rug.updateOne(req.body);
        res.status(200).json({
            success: true,
            message: 'Rug updated successfully',
            rug
        });
 
});

// Delete a rug
const deleteRug = asyncHandler(async (req, res) => {
        const rug = await LivingRoomRug.findByIdAndDelete(req.params.id);
        if (!rug) {
            return res.status(404).json({
                success: false,
                message: 'Rug not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Rug deleted successfully'
        });
   
});

module.exports = { createRug, getAllRugs, getRugById, updateRug, deleteRug };
