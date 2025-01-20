const Document = require('../../models/Documents/document');
const fs = require('fs');
const asyncHandler = require('../../utils/asyncHandler');

// @desc Upload a document
// @route POST /api/documents
exports.uploadDocument = asyncHandler(async (req, res) => {
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
  
});

// @desc Get all documents
// @route GET /api/documents
exports.getAllDocuments =asyncHandler( async (req, res) => {
    const documents = await Document.find();
    res.status(200).json({
      success: true,
      message: 'Documents fetched successfully',
      data: documents,
    });
 
});

// @desc Delete a document
// @route DELETE /api/documents/:id
exports.deleteDocument = asyncHandler(async (req, res) => {
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
  
});
