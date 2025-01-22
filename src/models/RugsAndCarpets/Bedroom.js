const mongoose = require('mongoose');

const rugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String], // Store multiple values in an array
        required: true,
        enum: [
            'Wool', 
            'Silk', 
            'Cotton', 
            'Blends (Wool-Silk)', 
            'Other' // Optionally allow for custom entries
        ]
    },
    productionProcess: {
        type: [String], // Store multiple values in an array
        required: true,
        enum: [
            'Hand-Knotted', 
            'Hand-Tufted', 
            'Machine-Made', 
            'Other' // Optionally allow for custom entries
        ]
    },
    knotPerInch: {
        type: String,
        required: true
    },
    designPattern: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    certifications: {
        type: String,
        required: true
    },
    colorShades: {
        type: String,
        required: true
    }
});

const Rug = mongoose.model('Rug', rugSchema);
module.exports = Rug;
