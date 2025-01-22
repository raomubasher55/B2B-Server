// Controller: VendorController.js
const Vendor = require('../models/Vendor');
const asyncHandler = require('../utils/asyncHandler');

// Create a new vendor application
exports.createVendor = asyncHandler(async (req, res) => {
    const vendor = new Vendor({ ...req.body, user: req.user._id });
    await vendor.save();
    res.status(201).json({ message: 'Vendor application submitted successfully.', vendor });
});

// Get all vendor applications for the logged-in user
exports.getAllVendors = asyncHandler(async (req, res) => {
    const vendors = await Vendor.find({ user: req.user._id });
    res.status(200).json(vendors);
});

// Get a specific vendor application by ID
exports.getVendorById = asyncHandler(async (req, res) => {
    const vendor = await Vendor.findOne({ _id: req.params.id, user: req.user._id });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found.' });
    }
    res.status(200).json(vendor);
 
});

// Update a vendor application
exports.updateVendor = asyncHandler(async (req, res) => {
    const vendor = await Vendor.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found.' });
    }
    res.status(200).json({ message: 'Vendor application updated successfully.', vendor });

});

// Delete a vendor application
exports.deleteVendor = asyncHandler(async (req, res) => {
    const vendor = await Vendor.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found.' });
    }
    res.status(200).json({ message: 'Vendor application deleted successfully.' });
});
