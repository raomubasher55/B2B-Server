const Papermachieware = require("../../models/DiningServingWare/Papermachieware");
const asyncHandler = require("../../utils/asyncHandler");

// Create Papermachieware item
exports.createPapermachieware = asyncHandler(async (req, res) => {
  const newPapermachieware = new Papermachieware({
    ...req.body,
    userId: req.user.user._id,
  });
  await newPapermachieware.save();
  res.status(201).json({
    success: true,
    message: "Papermachieware item created successfully",
    data: newPapermachieware,
  });
});

// Get all Papermachieware items
exports.getAllPapermachieware = asyncHandler(async (req, res) => {
  const papermachieware = await Papermachieware.find();
  res.status(200).json({
    success: true,
    data: papermachieware,
  });
});

// Get Papermachieware item by ID
exports.getPapermachiewareById = asyncHandler(async (req, res) => {
  const papermachieware = await Papermachieware.findById(req.params.id);
  if (!papermachieware) {
    return res.status(404).json({
      success: false,
      message: "Papermachieware item not found",
    });
  }
  res.status(200).json({
    success: true,
    data: papermachieware,
  });
});

// Update Papermachieware item
exports.updatePapermachieware = asyncHandler(async (req, res) => {
  const updatedPapermachieware = await Papermachieware.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedPapermachieware) {
    return res.status(404).json({
      success: false,
      message: "Papermachieware item not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Papermachieware item updated successfully",
    data: updatedPapermachieware,
  });
});

// Delete Papermachieware item
exports.deletePapermachieware = asyncHandler(async (req, res) => {
  const deletedPapermachieware = await Papermachieware.findByIdAndDelete(
    req.params.id
  );
  if (!deletedPapermachieware) {
    return res.status(404).json({
      success: false,
      message: "Papermachieware item not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Papermachieware item deleted successfully",
  });
});
