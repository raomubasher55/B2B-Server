const RoomDividerScreen = require('../../models/interiorDecor/RoomDividerScreen');
const asyncHandler = require('../../utils/asyncHandler');

// Create a new room divider screen
exports.createRoomDividerScreen = asyncHandler(async (req, res) => {
  try {
    const newRoomDividerScreen = new RoomDividerScreen({
      ...req.body,
      userId: req.user.user._id,
    });
    await newRoomDividerScreen.save();
    res.status(201).json({
      success: true,
      message: 'Room Divider Screen created successfully',
      data: newRoomDividerScreen
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

// Get all room divider screens
exports.getAllRoomDividerScreens = asyncHandler(async (req, res) => {
  try {
    const roomDividerScreens = await RoomDividerScreen.find();
    res.status(200).json({
      success: true,
      data: roomDividerScreens
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

// Get a room divider screen by ID
exports.getRoomDividerScreenById =asyncHandler( async (req, res) => {
  try {
    const roomDividerScreen = await RoomDividerScreen.findById(req.params.id);
    if (!roomDividerScreen) {
      return res.status(404).json({
        success: false,
        message: 'Room Divider Screen not found'
      });
    }
    res.status(200).json({
      success: true,
      data: roomDividerScreen
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

// Update room divider screen
exports.updateRoomDividerScreen = asyncHandler(async (req, res) => {
  try {
    const updatedRoomDividerScreen = await RoomDividerScreen.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRoomDividerScreen) {
      return res.status(404).json({
        success: false,
        message: 'Room Divider Screen not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Room Divider Screen updated successfully',
      data: updatedRoomDividerScreen
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

// Delete room divider screen
exports.deleteRoomDividerScreen = asyncHandler(async (req, res) => {
    const deletedRoomDividerScreen = await RoomDividerScreen.findByIdAndDelete(req.params.id);
    if (!deletedRoomDividerScreen) {
      return res.status(404).json({
        success: false,
        message: 'Room Divider Screen not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Room Divider Screen deleted successfully'
    });
 
});
