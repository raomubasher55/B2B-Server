const CigarRoomRug = require('../../models/RugsAndCarpets/CigarRoomRug');

// Create a new rug
const createRug = async (req, res) => {
    try {
        const newRug = new CigarRoomRug({
            ...req.body,
            userId: req.user.user._id,
        });
        await newRug.save();
        res.status(201).json({
            success: true,
            message: 'Cigar Room Rug created successfully',
            rug: newRug
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            res.status(400).json({
                success: false,
                message: 'Validation error occurred',
                errors: errorMessages
            });
        } else {
            res.status(500).json({ success: false, message: 'Error creating rug', error });
        }
    }
};

// Get all rugs
const getAllRugs = async (req, res) => {
    try {
        const rugs = await CigarRoomRug.find();
        res.status(200).json({
            success: true,
            message: 'Rugs fetched successfully',
            rugs
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching rugs', error });
    }
};

// Get a specific rug by ID
const getRugById = async (req, res) => {
    try {
        const rug = await CigarRoomRug.findById(req.params.id);
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
};

// Update a rug
const updateRug = async (req, res) => {
    try {
        const rug = await CigarRoomRug.findById(req.params.id);
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
};

// Delete a rug
const deleteRug = async (req, res) => {
    try {
        const rug = await CigarRoomRug.findByIdAndDelete(req.params.id);
        if (!rug) {
            return res.status(404).json({ success: false, message: 'Rug not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Rug deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting rug', error });
    }
};

module.exports = { createRug, getAllRugs, getRugById, updateRug, deleteRug };
