const Document = require('../../models/Documents/document');
const fs = require('fs');

// @desc Upload a document
// @route POST /api/documents
exports.uploadDocument = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded',
      });
    }

    const newDocument = new Document({
      fileName: file.originalname,
      fileType: file.mimetype.split('/')[1].toUpperCase(),
      filePath: file.path,
      userId: req.user.user._id,
    });

    const savedDocument = await newDocument.save();
    res.status(201).json({
      success: true,
      message: 'Document uploaded successfully',
      data: savedDocument,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading document',
      error: error.message,
    });
  }
};

// @desc Get all documents
// @route GET /api/documents
exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({
      success: true,
      message: 'Documents fetched successfully',
      data: documents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching documents',
      error: error.message,
    });
  }
};

// @desc Delete a document
// @route DELETE /api/documents/:id
exports.deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found',
      });
    }

    fs.unlinkSync(document.filePath); // Delete the file from the server
    await Document.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Document deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting document',
      error: error.message,
    });
  }
};
