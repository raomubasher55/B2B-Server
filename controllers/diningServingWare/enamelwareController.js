const Enamelware = require('../../models/diningServingWare/enamelware');

// Create Enamelware item
exports.createEnamelware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Enamelware items
exports.getAllEnamelware = async (req, res) => {
  try {
    const enamelware = await Enamelware.find();
    res.status(200).json({
      success: true,
      data: enamelware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get Enamelware item by ID
exports.getEnamelwareById = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update Enamelware item
exports.updateEnamelware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete Enamelware item
exports.deleteEnamelware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
