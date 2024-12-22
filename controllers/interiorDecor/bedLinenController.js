const BedLinen = require('../../models/interiorDecor/BedLinen');

// Add a new Bed Linen item
const addBedLinen = async (req, res) => {
  try {
    const newBedLinen = new BedLinen({
      ...req.body,
      userId: req.user.user._id,
    });
    await newBedLinen.save();
    res.status(201).json({
      success: true,
      message: "Bed Linen item added successfully",
      data: newBedLinen
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add Bed Linen item",
      error: error.message
    });
  }
};

// Get all Bed Linen items
const getAllBedLinens = async (req, res) => {
  try {
    const bedLinens = await BedLinen.find();
    res.status(200).json({
      success: true,
      message: "Bed Linen items retrieved successfully",
      data: bedLinens
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve Bed Linen items",
      error: error.message
    });
  }
};

// Get a Bed Linen item by ID
const getBedLinenById = async (req, res) => {
  try {
    const bedLinen = await BedLinen.findById(req.params.id);
    if (!bedLinen) {
      return res.status(404).json({
        success: false,
        message: "Bed Linen item not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Bed Linen item retrieved successfully",
      data: bedLinen
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve Bed Linen item",
      error: error.message
    });
  }
};

// Update a Bed Linen item
const updateBedLinen = async (req, res) => {
  try {
    const updatedBedLinen = await BedLinen.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBedLinen) {
      return res.status(404).json({
        success: false,
        message: "Bed Linen item not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Bed Linen item updated successfully",
      data: updatedBedLinen
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update Bed Linen item",
      error: error.message
    });
  }
};

// Delete a Bed Linen item
const deleteBedLinen = async (req, res) => {
  try {
    const deletedBedLinen = await BedLinen.findByIdAndDelete(req.params.id);
    if (!deletedBedLinen) {
      return res.status(404).json({
        success: false,
        message: "Bed Linen item not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Bed Linen item deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Bed Linen item",
      error: error.message
    });
  }
};

module.exports = {
  addBedLinen,
  getAllBedLinens,
  getBedLinenById,
  updateBedLinen,
  deleteBedLinen
};
