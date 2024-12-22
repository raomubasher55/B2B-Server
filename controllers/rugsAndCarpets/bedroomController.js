const BedroomRug = require('../../models/RugsAndCarpets/Bedroom');

// Create a Bedroom Rug
exports.createBedroomRug = async (req, res) => {
  try {
    const newRug = new BedroomRug({
      ...req.body,
      userId: req.user.user._id,
    });
    await newRug.save();
    res.status(201).json({
      success: true,
      message: 'Bedroom rug created successfully',
      data: newRug
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all Bedroom Rugs
exports.getAllBedroomRugs = async (req, res) => {
  try {
    const rugs = await BedroomRug.find();
    res.status(200).json({
      success: true,
      data: rugs
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get a Bedroom Rug by ID
exports.getBedroomRugById = async (req, res) => {
  try {
    const rug = await BedroomRug.findById(req.params.id);
    if (!rug) {
      return res.status(404).json({
        success: false,
        message: 'Bedroom rug not found'
      });
    }
    res.status(200).json({
      success: true,
      data: rug
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update a Bedroom Rug
exports.updateBedroomRug = async (req, res) => {
  try {
    const updatedRug = await BedroomRug.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRug) {
      return res.status(404).json({
        success: false,
        message: 'Bedroom rug not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Bedroom rug updated successfully',
      data: updatedRug
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete a Bedroom Rug
exports.deleteBedroomRug = async (req, res) => {
  try {
    const deletedRug = await BedroomRug.findByIdAndDelete(req.params.id);
    if (!deletedRug) {
      return res.status(404).json({
        success: false,
        message: 'Bedroom rug not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Bedroom rug deleted successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
