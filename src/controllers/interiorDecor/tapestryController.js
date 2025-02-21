const Tapestry = require("../../models/InteriorDecor/Tapestry");
const asyncHandler = require("../../utils/asyncHandler");

// Create a new tapestry
exports.createTapestry = asyncHandler(async (req, res) => {
  const newTapestry = new Tapestry({
    ...req.body,
    userId: req.user.user._id,
  });
  await newTapestry.save();
  res.status(201).json({
    success: true,
    message: "Tapestry created successfully",
    data: newTapestry,
  });
});

// Get all tapestries
exports.getAllTapestries = asyncHandler(async (req, res) => {
  const tapestries = await Tapestry.find();
  res.status(200).json({
    success: true,
    data: tapestries,
  });
});

// Get tapestry by ID
exports.getTapestryById = asyncHandler(async (req, res) => {
  const tapestry = await Tapestry.findById(req.params.id);
  if (!tapestry) {
    return res.status(404).json({
      success: false,
      message: "Tapestry not found",
    });
  }
  res.status(200).json({
    success: true,
    data: tapestry,
  });
});

// Update tapestry
exports.updateTapestry = asyncHandler(async (req, res) => {
  const updatedTapestry = await Tapestry.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedTapestry) {
    return res.status(404).json({
      success: false,
      message: "Tapestry not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Tapestry updated successfully",
    data: updatedTapestry,
  });
});

// Delete tapestry
exports.deleteTapestry = asyncHandler(async (req, res) => {
  const deletedTapestry = await Tapestry.findByIdAndDelete(req.params.id);
  if (!deletedTapestry) {
    return res.status(404).json({
      success: false,
      message: "Tapestry not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Tapestry deleted successfully",
  });
});
