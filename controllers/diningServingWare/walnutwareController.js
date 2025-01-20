const Walnutware = require('../../models/diningServingWare/Walnutware');
const asyncHandler = require('../../utils/asyncHandler');

// Create Walnutware item
exports.createWalnutware = asyncHandler(async (req, res) => {
    const newWalnutware = new Walnutware({
      ...req.body,
      userId: req.user.user._id,
    });
    await newWalnutware.save();
    res.status(201).json({
      success: true,
      message: 'Walnutware item created successfully',
      data: newWalnutware
    });
 
});

// Get all Walnutware items
exports.getAllWalnutware = asyncHandler(async (req, res) => {
    const walnutware = await Walnutware.find();
    res.status(200).json({
      success: true,
      data: walnutware
    });
 
});

// Get Walnutware item by ID
exports.getWalnutwareById =asyncHandler( async (req, res) => {
    const walnutware = await Walnutware.findById(req.params.id);
    if (!walnutware) {
      return res.status(404).json({
        success: false,
        message: 'Walnutware item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: walnutware
    });
  
});

// Update Walnutware item
exports.updateWalnutware = asyncHandler(async (req, res) => {
    const updatedWalnutware = await Walnutware.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedWalnutware) {
      return res.status(404).json({
        success: false,
        message: 'Walnutware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Walnutware item updated successfully',
      data: updatedWalnutware
    });
 
});

// Delete Walnutware item
exports.deleteWalnutware = asyncHandler(async (req, res) => {
    const deletedWalnutware = await Walnutware.findByIdAndDelete(req.params.id);
    if (!deletedWalnutware) {
      return res.status(404).json({
        success: false,
        message: 'Walnutware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Walnutware item deleted successfully'
    });
  
});
