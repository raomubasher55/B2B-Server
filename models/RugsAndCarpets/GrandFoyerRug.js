const mongoose = require('mongoose');

const grandFoyerRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        enum: ['Wool', 'Silk'],
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
        enum: ['Floral Patterns'],
        required: true
    },
    dimensions: {
        type: [String],
        enum: ["12' x 18' (360 cm x 540 cm)", "10' x 14' (300 cm x 420 cm)", "9' x 12' (270 cm x 360 cm)"],
        required: true
    },
    certifications: {
        type: [String],
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'],
        required: true
    },
    colorShades: {
        type: [String],
        enum: ['Amethyst Purple', 'Sapphire Blue', 'Cream', 'Beige', 'Brown', 'Olive'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('GrandFoyerRug', grandFoyerRugSchema);
