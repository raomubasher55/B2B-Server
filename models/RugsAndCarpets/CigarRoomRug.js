const mongoose = require('mongoose');

const cigarRoomRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        enum: ['Wool'],
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
        enum: ['Geometric Designs'],
        required: true
    },
    dimensions: {
        type: [String],
        enum: ["5' x 7' (150 cm x 210 cm)", "4' x 6' (120 cm x 180 cm)", "3' x 5' (90 cm x 150 cm)"],
        required: true
    },
    certifications: {
        type: [String],
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'],
        required: true
    },
    colorShades: {
        type: [String],
        enum: ['Wine/Burgundy', 'Forest Green', 'Charcoal', 'Espresso', 'Dark Shades'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('CigarRoomRug', cigarRoomRugSchema);
