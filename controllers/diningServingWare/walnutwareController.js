const Walnutware = require('../../models/diningServingWare/Walnutware');

// Create Walnutware item
exports.createWalnutware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Walnutware items
exports.getAllWalnutware = async (req, res) => {
  try {
    const walnutware = await Walnutware.find();
    res.status(200).json({
      success: true,
      data: walnutware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get Walnutware item by ID
exports.getWalnutwareById = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update Walnutware item
exports.updateWalnutware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete Walnutware item
exports.deleteWalnutware = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
