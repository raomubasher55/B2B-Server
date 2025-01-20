const SofaAndCushionCover = require('../../models/interiorDecor/SofaAndCushionCovers');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new Sofa and Cushion Cover
exports.createSofaAndCushionCover = asyncHandler(async (req, res) => {
    const sofaAndCushionCover = new SofaAndCushionCover({
      ...req.body,
      userId: req.user.user._id,
    });
    await sofaAndCushionCover.save();
    res.status(201).json({
      success: true,
      message: 'Sofa and Cushion Cover created successfully',
      data: sofaAndCushionCover
    });

});

// Get all Sofa and Cushion Covers
exports.getAllSofaAndCushionCovers = asyncHandler(async (req, res) => {
    const sofaAndCushionCovers = await SofaAndCushionCover.find();
    res.status(200).json({
      success: true,
      data: sofaAndCushionCovers
    });
    res.status(400).json({
      success: false,
      message: error.message
    });
  
});

// Get Sofa and Cushion Cover by ID
exports.getSofaAndCushionCoverById = asyncHandler(async (req, res) => {
    const sofaAndCushionCover = await SofaAndCushionCover.findById(req.params.id);
    if (!sofaAndCushionCover) {
      return res.status(404).json({
        success: false,
        message: 'Sofa and Cushion Cover not found'
      });
    }
    res.status(200).json({
      success: true,
      data: sofaAndCushionCover
    });
  
});

// Update Sofa and Cushion Cover by ID
exports.updateSofaAndCushionCover = asyncHandler(async (req, res) => {
    const updatedCover = await SofaAndCushionCover.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCover) {
      return res.status(404).json({
        success: false,
        message: 'Sofa and Cushion Cover not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Sofa and Cushion Cover updated successfully',
      data: updatedCover
    });
 
});

// Delete Sofa and Cushion Cover by ID
exports.deleteSofaAndCushionCover = asyncHandler(async (req, res) => {
    const deletedCover = await SofaAndCushionCover.findByIdAndDelete(req.params.id);
    if (!deletedCover) {
      return res.status(404).json({
        success: false,
        message: 'Sofa and Cushion Cover not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Sofa and Cushion Cover deleted successfully'
    });

});
