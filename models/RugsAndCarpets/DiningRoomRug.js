const mongoose = require('mongoose');

const diningRoomRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        required: true,
        enum: ['Wool', 'Silk', 'Cotton', 'Blends (Wool-Silk)'], // Enums for material type
    },
    productionProcess: {
        type: [String],
        required: true,
        enum: ['Hand-Knotted', 'Hand-Tufted', 'Machine-Made'], // Enums for production process
    },
    knotPerInch: {
        type: String,
        required: true,
        enum: ['100-300 KPSI', '300-600 KPSI', '60-100 KPSI', '400-800 KPSI'], // Enums for KPSI
    },
    designPattern: {
        type: [String],
        required: true,
        enum: ['Floral Patterns', 'Traditional Kashmiri Motifs'], // Enums for design patterns
    },
    dimensions: {
        type: [String],
        required: true,
        enum: ['8\' x 10\' (240 cm x 300 cm)', '9\' x 12\' (270 cm x 360 cm)', '6\' x 9\' (180 cm x 270 cm)'], // Enums for dimensions
    },
    certifications: {
        type: [String],
        required: true,
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'], // Enums for certifications
    },
    colorShades: {
        type: [String],
        required: true,
        enum: ['Olive Green', 'Mustard Yellow', 'Coral', 'Aqua', 'Rust', 'Clay', 'Sage'], // Enums for color shades
    }
}, { timestamps: true });

module.exports = mongoose.model('DiningRoomRug', diningRoomRugSchema);
