const mongoose = require('mongoose');

const livingRoomRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        required: true,
        enum: [
            'Wool', 
            'Silk', 
            'Cotton', 
            'Blends (Wool-Silk)',
            'Other'
        ]
    },
    productionProcess: {
        type: [String],
        required: true,
        enum: [
            'Hand-Knotted', 
            'Hand-Tufted', 
            'Machine-Made', 
            'Other'
        ]
    },
    knotPerInch: {
        type: String,
        required: true
    },
    designPattern: {
        type: [String],
        required: true,
        enum: [
            'Floral Patterns',
            'Geometric Designs',
            'Abstract Designs',
            'Other'
        ]
    },
    dimensions: {
        type: [String],
        required: true,
        enum: [
            "8' x 10' (240 cm x 300 cm)",
            "9' x 12' (270 cm x 360 cm)",
            "6' x 9' (180 cm x 270 cm)"
        ]
    },
    certifications: {
        type: [String],
        required: true,
        enum: [
            'Geographical Indication (GI) Tag', 
            'Eco-Friendly Certification',
            'Other'
        ]
    },
    colorShades: {
        type: [String],
        required: true,
        enum: [
            'Emerald Green', 'Ruby Red', 'Scarlet Red', 'Turquoise', 
            'Beige', 'Gray', 'Charcoal', 'Mahogany', 'Soft Peach', 
            'Light Lavender', 'Sky Blue', 'Other'
        ]
    }
});

const LivingRoomRug = mongoose.model('LivingRoomRug', livingRoomRugSchema);
module.exports = LivingRoomRug;
