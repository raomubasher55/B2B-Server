const Copperware = require('../../models/DiningServingWare/Copperware');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new Copperware item
exports.createCopperware = asyncHandler(async (req, res) => {
    const newCopperware = new Copperware({
      ...req.body,
      userId: req.user.user._id,
    });
    await newCopperware.save();
    res.status(201).json({
      success: true,
      message: 'Copperware created successfully',
      data: newCopperware
    });
  
});

// Get all Copperware items
exports.getAllCopperware = asyncHandler(async (req, res) => {
    const copperware = await Copperware.find();
    res.status(200).json({
      success: true,
      data: copperware
    });
  
});

// Get Copperware item by ID
exports.getCopperwareById = asyncHandler(async (req, res) => {
    const copperware = await Copperware.findById(req.params.id);
    if (!copperware) {
      return res.status(404).json({
        success: false,
        message: 'Copperware item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: copperware
    });
  
});

// Update Copperware item
exports.updateCopperware = asyncHandler(async (req, res) => {
    const updatedCopperware = await Copperware.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCopperware) {
      return res.status(404).json({
        success: false,
        message: 'Copperware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Copperware item updated successfully',
      data: updatedCopperware
    });
 
});

// Delete Copperware item
exports.deleteCopperware = asyncHandler(async (req, res) => {
    const deletedCopperware = await Copperware.findByIdAndDelete(req.params.id);
    if (!deletedCopperware) {
      return res.status(404).json({
        success: false,
        message: 'Copperware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Copperware item deleted successfully'
    });
  
});
