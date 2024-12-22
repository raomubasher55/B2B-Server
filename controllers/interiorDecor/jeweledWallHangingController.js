const JeweledWallHanging = require('../../models/interiorDecor/jeweledWallHanging');

// Create a new jeweled wall hanging
exports.createJeweledWallHanging = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all jeweled wall hangings
exports.getAllJeweledWallHangings = async (req, res) => {
  try {
    const jeweledWallHangings = await JeweledWallHanging.find();
    res.status(200).json({
      success: true,
      data: jeweledWallHangings
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get jeweled wall hanging by ID
exports.getJeweledWallHangingById = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update jeweled wall hanging
exports.updateJeweledWallHanging = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete jeweled wall hanging
exports.deleteJeweledWallHanging = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
