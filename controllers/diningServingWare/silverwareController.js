const Silverware = require('../../models/diningServingWare/Silverware');

// Create a new Silverware item
exports.createSilverware = async (req, res) => {
  try {
    const newSilverware = new Silverware({
      ...req.body,
      userId: req.user.user._id,
    });
    await newSilverware.save();
    res.status(201).json({
      success: true,
      message: 'Silverware created successfully',
      data: newSilverware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Silverware items
exports.getAllSilverware = async (req, res) => {
  try {
    const silverware = await Silverware.find();
    res.status(200).json({
      success: true,
      data: silverware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get Silverware item by ID
exports.getSilverwareById = async (req, res) => {
  try {
    const silverware = await Silverware.findById(req.params.id);
    if (!silverware) {
      return res.status(404).json({
        success: false,
        message: 'Silverware item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: silverware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update Silverware item
exports.updateSilverware = async (req, res) => {
  try {
    const updatedSilverware = await Silverware.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSilverware) {
      return res.status(404).json({
        success: false,
        message: 'Silverware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Silverware item updated successfully',
      data: updatedSilverware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete Silverware item
exports.deleteSilverware = async (req, res) => {
  try {
    const deletedSilverware = await Silverware.findByIdAndDelete(req.params.id);
    if (!deletedSilverware) {
      return res.status(404).json({
        success: false,
        message: 'Silverware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Silverware item deleted successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
