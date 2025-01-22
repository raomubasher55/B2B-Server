const mongoose = require('mongoose');

const homeLibraryRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        enum: ['Wool', 'Silk', 'Blends (Wool-Silk)'],
        required: true
    },
    productionProcess: {
        type: [String],
        enum: ['Hand-Knotted'],
        required: true
    },
    knotPerInch: {
        type: [String],
        enum: ['100-300 KPSI', '300-600 KPSI', '60-100 KPSI', '400-800 KPSI'],
        required: true
    },
    designPattern: {
        type: [String],
        enum: ['Traditional Kashmiri Motifs', 'Floral Patterns'],
        required: true
    },
    dimensions: {
        type: [String],
        enum: ["5' x 7' (150 cm x 210 cm)", "6' x 9' (180 cm x 270 cm)", "4' x 6' (120 cm x 180 cm)"],
        required: true
    },
    certifications: {
        type: [String],
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'],
        required: true
    },
    colorShades: {
        type: [String],
        enum: ['Snow White', 'Antique White', 'Beige', 'Tan', 'Deep Blue', 'Emerald', 'Gray', 'Black', 'Light Pink', 'Baby Blue'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('HomeLibraryRug', homeLibraryRugSchema);
