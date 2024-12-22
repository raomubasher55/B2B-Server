const mongoose = require('mongoose');

const kitchenRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        required: true,
        enum: ['Wool', 'Blends (Wool-Cotton)'], // Enum for material type
    },
    productionProcess: {
        type: [String],
        required: true,
        enum: ['Hand-Tufted', 'Machine-Made'], // Enum for production process
    },
    knotPerInch: {
        type: String,
        required: true,
        enum: ['60-120 KPSI'], // Enum for knot per inch
    },
    designPattern: {
        type: [String],
        required: true,
        enum: ['Geometric Designs', 'Abstract Designs'], // Enum for design patterns
    },
    dimensions: {
        type: [String],
        required: true,
        enum: ['2\' x 3\' (60 cm x 90 cm)', '2\' x 6\' (60 cm x 180 cm)', '3\' x 5\' (90 cm x 150 cm)'], // Enum for dimensions
    },
    certifications: {
        type: [String],
        required: true,
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'], // Enum for certifications
    },
    colorShades: {
        type: [String],
        required: true,
        enum: ['Coral', 'Sunshine Yellow', 'Soft Pink', 'Light Mint', 'Red', 'Orange', 'Sand', 'Olive'], // Enum for color shades
    }
}, { timestamps: true });

module.exports = mongoose.model('KitchenRug', kitchenRugSchema);
