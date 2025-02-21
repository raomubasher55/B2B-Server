const KashmiriKaftan = require("../../models/Boutique/KashmiriKaftan");
const asyncHandler = require("../../utils/asyncHandler");

// Create a new Kashmiri Kaftan
exports.createKashmiriKaftan = asyncHandler(async (req, res) => {
  try {
    const kashmiriKaftan = new KashmiriKaftan({
      ...req.body,
      userId: req.user.user._id,
    });
    await kashmiriKaftan.save();
    res.status(201).json({ success: true, data: kashmiriKaftan });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all Kashmiri Kaftans
exports.getAllKashmiriKaftans = asyncHandler(async (req, res) => {
  try {
    const kaftans = await KashmiriKaftan.find();
    res.status(200).json({ success: true, data: kaftans });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get a single Kashmiri Kaftan by ID
exports.getKashmiriKaftanById = asyncHandler(async (req, res) => {
  try {
    const kaftan = await KashmiriKaftan.findById(req.params.id);
    if (!kaftan) {
      return res
        .status(404)
        .json({ success: false, message: "Kashmiri Kaftan not found" });
    }
    res.status(200).json({ success: true, data: kaftan });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Update a Kashmiri Kaftan by ID
exports.updateKashmiriKaftan = asyncHandler(async (req, res) => {
  try {
    const kaftan = await KashmiriKaftan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!kaftan) {
      return res
        .status(404)
        .json({ success: false, message: "Kashmiri Kaftan not found" });
    }
    res.status(200).json({ success: true, data: kaftan });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Delete a Kashmiri Kaftan by ID
exports.deleteKashmiriKaftan = asyncHandler(async (req, res) => {
  try {
    const kaftan = await KashmiriKaftan.findByIdAndDelete(req.params.id);
    if (!kaftan) {
      return res
        .status(404)
        .json({ success: false, message: "Kashmiri Kaftan not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Kashmiri Kaftan deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
