const OfficeAccessory = require('../../models/interiorDecor/OfficeAccessory');

// Create a new office accessory
exports.createOfficeAccessory = async (req, res) => {
  try {
    const newOfficeAccessory = new OfficeAccessory({
      ...req.body,
      userId: req.user.user._id,
    });
    await newOfficeAccessory.save();
    res.status(201).json({
      success: true,
      message: 'Office Accessory created successfully',
      data: newOfficeAccessory
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get all office accessories
exports.getAllOfficeAccessories = async (req, res) => {
  try {
    const officeAccessories = await OfficeAccessory.find();
    res.status(200).json({
      success: true,
      data: officeAccessories
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Get office accessory by ID
exports.getOfficeAccessoryById = async (req, res) => {
  try {
    const officeAccessory = await OfficeAccessory.findById(req.params.id);
    if (!officeAccessory) {
      return res.status(404).json({
        success: false,
        message: 'Office Accessory not found'
      });
    }
    res.status(200).json({
      success: true,
      data: officeAccessory
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Update office accessory
exports.updateOfficeAccessory = async (req, res) => {
  try {
    const updatedOfficeAccessory = await OfficeAccessory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedOfficeAccessory) {
      return res.status(404).json({
        success: false,
        message: 'Office Accessory not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Office Accessory updated successfully',
      data: updatedOfficeAccessory
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// Delete office accessory
exports.deleteOfficeAccessory = async (req, res) => {
  try {
    const deletedOfficeAccessory = await OfficeAccessory.findByIdAndDelete(req.params.id);
    if (!deletedOfficeAccessory) {
      return res.status(404).json({
        success: false,
        message: 'Office Accessory not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Office Accessory deleted successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};
