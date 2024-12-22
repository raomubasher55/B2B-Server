const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadDocument, getAllDocuments, deleteDocument } = require('../../controllers/documents/documentController');
const isLogined = require('../../middlewares/auth');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/documents'); // Save files in this directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post('/',isLogined , upload.single('file'), uploadDocument); // Upload a document
router.get('/', getAllDocuments); // Get all documents
router.delete('/:id', deleteDocument); // Delete a document by ID

module.exports = router;
