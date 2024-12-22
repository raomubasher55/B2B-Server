const Papermachieware = require('../../models/diningServingWare/Papermachieware');

// Create Papermachieware item
exports.createPapermachieware = async (req, res) => {
  try {
    const newPapermachieware = new Papermachieware({
      ...req.body,
      userId: req.user.user._id,
    });
    await newPapermachieware.save();
    res.status(201).json({
      success: true,
      message: 'Papermachieware item created successfully',
      data: newPapermachieware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Papermachieware items
exports.getAllPapermachieware = async (req, res) => {
  try {
    const papermachieware = await Papermachieware.find();
    res.status(200).json({
      success: true,
      data: papermachieware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get Papermachieware item by ID
exports.getPapermachiewareById = async (req, res) => {
  try {
    const papermachieware = await Papermachieware.findById(req.params.id);
    if (!papermachieware) {
      return res.status(404).json({
        success: false,
        message: 'Papermachieware item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: papermachieware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update Papermachieware item
exports.updatePapermachieware = async (req, res) => {
  try {
    const updatedPapermachieware = await Papermachieware.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPapermachieware) {
      return res.status(404).json({
        success: false,
        message: 'Papermachieware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Papermachieware item updated successfully',
      data: updatedPapermachieware
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete Papermachieware item
exports.deletePapermachieware = async (req, res) => {
  try {
    const deletedPapermachieware = await Papermachieware.findByIdAndDelete(req.params.id);
    if (!deletedPapermachieware) {
      return res.status(404).json({
        success: false,
        message: 'Papermachieware item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Papermachieware item deleted successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
