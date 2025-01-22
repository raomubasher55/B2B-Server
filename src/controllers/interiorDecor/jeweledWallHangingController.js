const JeweledWallHanging = require('../../models/interiorDecor/jeweledWallHanging');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new jeweled wall hanging
exports.createJeweledWallHanging = asyncHandler(async (req, res) => {
    const newJeweledWallHanging = new JeweledWallHanging({
      ...req.body,
      userId: req.user.user._id,
    });
    await newJeweledWallHanging.save();
    res.status(201).json({
      success: true,
      message: 'Jeweled Wall Hanging created successfully',
      data: newJeweledWallHanging
    });
 
});

// Get all jeweled wall hangings
exports.getAllJeweledWallHangings = asyncHandler(async (req, res) => {
    const jeweledWallHangings = await JeweledWallHanging.find();
    res.status(200).json({
      success: true,
      data: jeweledWallHangings
    });
 
});

// Get jeweled wall hanging by ID
exports.getJeweledWallHangingById = asyncHandler(async (req, res) => {
    const jeweledWallHanging = await JeweledWallHanging.findById(req.params.id);
    if (!jeweledWallHanging) {
      return res.status(404).json({
        success: false,
        message: 'Jeweled Wall Hanging not found'
      });
    }
    res.status(200).json({
      success: true,
      data: jeweledWallHanging
    });
 
});

// Update jeweled wall hanging
exports.updateJeweledWallHanging = asyncHandler(async (req, res) => {
    const updatedJeweledWallHanging = await JeweledWallHanging.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedJeweledWallHanging) {
      return res.status(404).json({
        success: false,
        message: 'Jeweled Wall Hanging not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Jeweled Wall Hanging updated successfully',
      data: updatedJeweledWallHanging
    });
  
});

// Delete jeweled wall hanging
exports.deleteJeweledWallHanging = asyncHandler(async (req, res) => {
    const deletedJeweledWallHanging = await JeweledWallHanging.findByIdAndDelete(req.params.id);
    if (!deletedJeweledWallHanging) {
      return res.status(404).json({
        success: false,
        message: 'Jeweled Wall Hanging not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Jeweled Wall Hanging deleted successfully'
    });
 
});
