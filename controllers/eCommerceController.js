const ECommerceModel = require('../models/ECommerce');
const asyncHandler = require('../utils/asyncHandler');

// Controller to create a new E-Commerce record
exports.createECommerce = asyncHandler(async (req, res) => {
      const eCommerce = new ECommerceModel({
        ...req.body,
        userId: req.user.user._id
      });
      await eCommerce.save();
      res.status(201).json({ success: true, data: eCommerce });
    });
  
  // Controller to fetch all E-Commerce records
  exports.getAllECommerce = asyncHandler(async (req, res) => {
      const eCommerceRecords = await ECommerceModel.find();
      res.status(200).json({ success: true, data: eCommerceRecords });
    });
  
  // Controller to fetch a single E-Commerce record by ID
  exports.getECommerceById = asyncHandler(async (req, res) => {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findById(id);
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, data: eCommerceRecord });
     });
  
  // Controller to update an E-Commerce record by ID
  exports.updateECommerce = asyncHandler(async (req, res) => {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, data: eCommerceRecord });
   });
  
  // Controller to delete an E-Commerce record by ID
  exports.deleteECommerce = asyncHandler(async (req, res) => {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findByIdAndDelete(id);
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, message: "Record deleted successfully" });
     });