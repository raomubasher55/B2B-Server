const Copperware = require('../../models/DiningServingWare/Copperware');

// Create a new Copperware item
exports.createCopperware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Copperware items
exports.getAllCopperware = async (req, res) => {
  try {
    const copperware = await Copperware.find();
    res.status(200).json({
      success: true,
      data: copperware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get Copperware item by ID
exports.getCopperwareById = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update Copperware item
exports.updateCopperware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete Copperware item
exports.deleteCopperware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
