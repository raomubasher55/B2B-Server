const Silverware = require("../../models/DiningServingWare/Silverware");
const asyncHandler = require("../../utils/asyncHandler");

// Create a new Silverware item
exports.createSilverware = asyncHandler(async (req, res) => {
  const newSilverware = new Silverware({
    ...req.body,
    userId: req.user.user._id,
  });
  await newSilverware.save();
  res.status(201).json({
    success: true,
    message: "Silverware created successfully",
    data: newSilverware,
  });
});

// Get all Silverware items
exports.getAllSilverware = asyncHandler(async (req, res) => {
  const silverware = await Silverware.find();
  res.status(200).json({
    success: true,
    data: silverware,
  });
});

// Get Silverware item by ID
exports.getSilverwareById = asyncHandler(async (req, res) => {
  const silverware = await Silverware.findById(req.params.id);
  if (!silverware) {
    return res.status(404).json({
      success: false,
      message: "Silverware item not found",
    });
  }
  res.status(200).json({
    success: true,
    data: silverware,
  });
});

// Update Silverware item
exports.updateSilverware = asyncHandler(async (req, res) => {
  const updatedSilverware = await Silverware.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedSilverware) {
    return res.status(404).json({
      success: false,
      message: "Silverware item not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Silverware item updated successfully",
    data: updatedSilverware,
  });
});

// Delete Silverware item
exports.deleteSilverware = asyncHandler(async (req, res) => {
  const deletedSilverware = await Silverware.findByIdAndDelete(req.params.id);
  if (!deletedSilverware) {
    return res.status(404).json({
      success: false,
      message: "Silverware item not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Silverware item deleted successfully",
  });
});
