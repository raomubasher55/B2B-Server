const mongoose = require('mongoose');

const passagewayStairsRugSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        enum: ['Wool', 'Blends (Wool-Cotton)'],
        required: true
    },
    productionProcess: {
        type: [String],
        enum: ['Hand-Tufted'],
        required: true
    },
    knotPerInch: {
        type: [String],
        enum: ['60-120 KPSI'],
        required: true
    },
    designPattern: {
        type: [String],
        enum: ['Geometric Designs'],
        required: true
    },
    dimensions: {
        type: [String],
        enum: ["2' x 8' (60 cm x 240 cm)", "3' x 10' (90 cm x 300 cm)", "2' x 6' (60 cm x 180 cm)"],
        required: true
    },
    certifications: {
        type: [String],
        enum: ['Geographical Indication (GI) Tag', 'Eco-Friendly Certification'],
        required: true
    },
    colorShades: {
        type: [String],
        enum: ['Gray', 'Beige', 'Olive', 'Clay', 'Charcoal'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('PassagewayStairsRug', passagewayStairsRugSchema);
