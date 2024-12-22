const SofaAndCushionCover = require('../../models/interiorDecor/SofaAndCushionCovers');

// Create a new Sofa and Cushion Cover
exports.createSofaAndCushionCover = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all Sofa and Cushion Covers
exports.getAllSofaAndCushionCovers = async (req, res) => {
  try {
    const sofaAndCushionCovers = await SofaAndCushionCover.find();
    res.status(200).json({
      success: true,
      data: sofaAndCushionCovers
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get Sofa and Cushion Cover by ID
exports.getSofaAndCushionCoverById = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update Sofa and Cushion Cover by ID
exports.updateSofaAndCushionCover = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Sofa and Cushion Cover by ID
exports.deleteSofaAndCushionCover = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
