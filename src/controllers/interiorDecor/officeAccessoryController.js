const OfficeAccessory = require('../../models/interiorDecor/OfficeAccessory');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new office accessory
exports.createOfficeAccessory = asyncHandler(async (req, res) => {
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

});

// Get all office accessories
exports.getAllOfficeAccessories = asyncHandler(async (req, res) => {
    const officeAccessories = await OfficeAccessory.find();
    res.status(200).json({
      success: true,
      data: officeAccessories
    });

});

// Get office accessory by ID
exports.getOfficeAccessoryById =asyncHandler( async (req, res) => {
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

});

// Update office accessory
exports.updateOfficeAccessory = async (req, res) => {
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

};

// Delete office accessory
exports.deleteOfficeAccessory = asyncHandler(async (req, res) => {
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

});
