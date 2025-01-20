const Enamelware = require('../../models/diningServingWare/enamelware');
const asyncHandler = require('../../utils/asyncHandler');

// Create Enamelware item
exports.createEnamelware = asyncHandler(async (req, res) => {
    const newEnamelware = new Enamelware({
      ...req.body,
      userId: req.user.user._id,
    });
    await newEnamelware.save();
    res.status(201).json({
      success: true,
      message: 'Enamelware item created successfully',
      data: newEnamelware
    });
 
});

// Get all Enamelware items
exports.getAllEnamelware =asyncHandler( async (req, res) => {
    const enamelware = await Enamelware.find();
    res.status(200).json({
      success: true,
      data: enamelware
    });
  
});

// Get Enamelware item by ID
exports.getEnamelwareById = asyncHandler(async (req, res) => {
    const enamelware = await Enamelware.findById(req.params.id);
    if (!enamelware) {
      return res.status(404).json({
        success: false,
        message: 'Enamelware item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: enamelware
    });
 
});

// Update Enamelware item
exports.updateEnamelware = asyncHandler(async (req, res) => {
    const updatedEnamelware = await Enamelware.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEnamelware) {
      return res.status(404).json({
        success: false,
        message: 'Enamelware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Enamelware item updated successfully',
      data: updatedEnamelware
    });
 
});

// Delete Enamelware item
exports.deleteEnamelware = asyncHandler(async (req, res) => {
    const deletedEnamelware = await Enamelware.findByIdAndDelete(req.params.id);
    if (!deletedEnamelware) {
      return res.status(404).json({
        success: false,
        message: 'Enamelware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Enamelware item deleted successfully'
    });
  
});
