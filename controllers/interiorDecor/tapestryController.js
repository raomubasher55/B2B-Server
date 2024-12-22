const Tapestry = require('../../models/interiorDecor/Tapestry');

// Create a new tapestry
exports.createTapestry = async (req, res) => {
  try {
    const newTapestry = new Tapestry({
      ...req.body,
      userId: req.user.user._id,
    });
    await newTapestry.save();
    res.status(201).json({
      success: true,
      message: 'Tapestry created successfully',
      data: newTapestry
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all tapestries
exports.getAllTapestries = async (req, res) => {
  try {
    const tapestries = await Tapestry.find();
    res.status(200).json({
      success: true,
      data: tapestries
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get tapestry by ID
exports.getTapestryById = async (req, res) => {
  try {
    const tapestry = await Tapestry.findById(req.params.id);
    if (!tapestry) {
      return res.status(404).json({
        success: false,
        message: 'Tapestry not found'
      });
    }
    res.status(200).json({
      success: true,
      data: tapestry
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update tapestry
exports.updateTapestry = async (req, res) => {
  try {
    const updatedTapestry = await Tapestry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTapestry) {
      return res.status(404).json({
        success: false,
        message: 'Tapestry not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Tapestry updated successfully',
      data: updatedTapestry
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete tapestry
exports.deleteTapestry = async (req, res) => {
  try {
    const deletedTapestry = await Tapestry.findByIdAndDelete(req.params.id);
    if (!deletedTapestry) {
      return res.status(404).json({
        success: false,
        message: 'Tapestry not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Tapestry deleted successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
