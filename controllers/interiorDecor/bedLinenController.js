const BedLinen = require('../../models/interiorDecor/BedLinen');
const asyncHandler = require('../../utils/asyncHandler');

// Add a new Bed Linen item
const addBedLinen = asyncHandler(async (req, res) => {
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
 
});

// Get all Bed Linen items
const getAllBedLinens = asyncHandler(async (req, res) => {
    const bedLinens = await BedLinen.find();
    res.status(200).json({
      success: true,
      message: "Bed Linen items retrieved successfully",
      data: bedLinens
    });
 
});

// Get a Bed Linen item by ID
const getBedLinenById = asyncHandler(async (req, res) => {
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
  
});

// Update a Bed Linen item
const updateBedLinen = asyncHandler(async (req, res) => {
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
 
});

// Delete a Bed Linen item
const deleteBedLinen = asyncHandler(async (req, res) => {
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
 
});

module.exports = {
  addBedLinen,
  getAllBedLinens,
  getBedLinenById,
  updateBedLinen,
  deleteBedLinen
};
