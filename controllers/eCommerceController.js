// Controller to create a new E-Commerce record
exports.createECommerce = async (req, res) => {
    try {
      const eCommerce = new ECommerceModel({
        ...req.body,
        userId: req.user.user._id
      });
      await eCommerce.save();
      res.status(201).json({ success: true, data: eCommerce });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };
  
  // Controller to fetch all E-Commerce records
  exports.getAllECommerce = async (req, res) => {
    try {
      const eCommerceRecords = await ECommerceModel.find();
      res.status(200).json({ success: true, data: eCommerceRecords });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // Controller to fetch a single E-Commerce record by ID
  exports.getECommerceById = async (req, res) => {
    try {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findById(id);
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, data: eCommerceRecord });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // Controller to update an E-Commerce record by ID
  exports.updateECommerce = async (req, res) => {
    try {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, data: eCommerceRecord });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
  // Controller to delete an E-Commerce record by ID
  exports.deleteECommerce = async (req, res) => {
    try {
      const { id } = req.params;
      const eCommerceRecord = await ECommerceModel.findByIdAndDelete(id);
      if (!eCommerceRecord) {
        return res.status(404).json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, message: "Record deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };