const FranchiseApplication = require("../models/franchiseApplication");
const asyncHandler = require("../utils/asyncHandler");

// Create a new franchise application
exports.createApplication = asyncHandler(async (req, res) => {
  // Ensure that the userId is taken from the authenticated user
  const newApplication = new FranchiseApplication({
    ...req.body, // Other fields from the request body
    userId: req.user._id, // Add userId to the application
  });
  await newApplication.save();
  res
    .status(201)
    .json({
      message: "Franchise application created successfully",
      data: newApplication,
    });
});

// Get all franchise applications for the logged-in user
exports.getApplications = asyncHandler(async (req, res) => {
  const applications = await FranchiseApplication.find({
    userId: req.user._id,
  });
  res.status(200).json({ data: applications });
});

// Get a single franchise application by ID (only if it belongs to the logged-in user)
exports.getApplicationById = asyncHandler(async (req, res) => {
  const application = await FranchiseApplication.findOne({
    _id: req.params.id,
    userId: req.user._id,
  });
  if (!application) {
    return res
      .status(404)
      .json({ message: "Application not found or unauthorized access" });
  }
  res.status(200).json({ data: application });
});

// Update a franchise application by ID (only if it belongs to the logged-in user)
exports.updateApplication = asyncHandler(async (req, res) => {
  const application = await FranchiseApplication.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  if (!application) {
    return res
      .status(404)
      .json({ message: "Application not found or unauthorized access" });
  }
  res
    .status(200)
    .json({ message: "Application updated successfully", data: application });
});

// Delete a franchise application by ID (only if it belongs to the logged-in user)
exports.deleteApplication = asyncHandler(async (req, res) => {
  const application = await FranchiseApplication.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id,
  });
  if (!application) {
    return res
      .status(404)
      .json({ message: "Application not found or unauthorized access" });
  }
});
