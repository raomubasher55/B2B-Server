const mongoose = require('mongoose');

const KashmiriJewelrySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: [
            'Silver', 'Gold', 'Copper', 'Brass',
            'Semi-precious Stones', 'Pearls', 'Enamel'
        ]
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Pure Silver',
            '22K Gold',
            'Brass with Silver Plating',
            'Handcrafted Silver'
        ]
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: ['Handcrafted', 'Machine-Made', 'Traditional Techniques']
    },
    jewelryTypes: [{
        type: String,
        required: true,
        enum: [
            'Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Bangles', 'Anklets'
        ]
    }],
    designAndPatternTypes: [{
        type: String,
        required: true,
        enum: [
            'Traditional Kashmiri Motifs',
            'Floral Patterns',
            'Geometric Designs',
            'Filigree Work',
            'Kundan Work'
        ]
    }],
    finishingTechniques: [{
        type: String,
        required: true,
        enum: [
            'Polished Finish',
            'Matte Finish',
            'Oxidized Finish',
            'Hammered Finish',
            'Enamel Work'
        ]
    }],
    productLineAndSize: [{
        type: String,
        required: true,
        enum: [
            'Necklaces - Length: 16-20 inches (41-51 cm)',
            'Earrings - Length: 1-3 inches (2.5-7.5 cm)',
            'Bracelets - Length: 7-8 inches (18-20 cm)',
            'Rings - Sizes: 6-10 (US Sizes)',
            'Bangles - Diameter: 2.5-3 inches (6.5-7.5 cm)',
            'Anklets - Length: 9-11 inches (23-28 cm)'
        ]
    }],
    colorShades: [{
        type: String,
        required: true,
        enum: [
            'Silver', 'Gold', 'Copper', 'Green (Emeralds)',
            'Red (Rubies)', 'Blue (Sapphires)', 'Clear (Diamonds)',
            'Red', 'Green', 'Blue', 'Yellow'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: [
            'Filigree Work', 'Stone Inlays', 'Enamel Detailing', 'Beading'
        ]
    }]
});

module.exports = mongoose.model('KashmiriJewelry', KashmiriJewelrySchema);
