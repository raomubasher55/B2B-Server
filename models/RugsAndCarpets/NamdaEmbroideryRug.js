const mongoose = require('mongoose');

const namdaEmbroideryRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        enum: ['Wool', 'Blends (Wool-Cotton)'],
        required: true
    },
    productionProcess: {
        type: [String],
        enum: ['Handcrafted'],
        required: true
    },
    knotPerInch: {
        type: String,
        enum: ['Not applicable'],
        required: true
    },
    designPattern: {
        type: [String],
        enum: ['Traditional Kashmiri Motifs'],
        required: true
    },
    dimensions: {
        type: [String],
        enum: ["4' x 6' (120 cm x 180 cm)", "5' x 7' (150 cm x 210 cm)", "3' x 5' (90 cm x 150 cm)"],
        required: true
    },
    certifications: {
        type: [String],
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'],
        required: true
    },
    colorShades: {
        type: [String],
        enum: ['Terracotta', 'Olive Green', 'Natural Shades', 'Jewel Tones', 'Deep Hues'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('NamdaEmbroideryRug', namdaEmbroideryRugSchema);
