const PapierMache = require("../../models/InteriorDecor/PapierMache");
const asyncHandler = require("../../utils/asyncHandler");

// Controller for getting all Papier-Mâché items
const getPapierMacheItems = asyncHandler(async (req, res) => {
  const items = await PapierMache.find();
  res
    .status(200)
    .json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
});

// Controller for creating a new Papier-Mâché item
const createPapierMacheItem = asyncHandler(async (req, res) => {
  const newItem = new PapierMache({
    ...req.body,
    userId: req.user.user._id,
  });
  await newItem.save();
  res
    .status(201)
    .json({
      success: true,
      message: "Item created successfully",
      data: newItem,
    });
});

// Controller for updating a Papier-Mâché item
const updatePapierMacheItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedItem = await PapierMache.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedItem) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  res
    .status(200)
    .json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
});

// Controller for deleting a Papier-Mâché item
const deletePapierMacheItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedItem = await PapierMache.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  res.status(200).json({ success: true, message: "Item deleted successfully" });
});

module.exports = {
  getPapierMacheItems,
  createPapierMacheItem,
  updatePapierMacheItem,
  deletePapierMacheItem,
};
