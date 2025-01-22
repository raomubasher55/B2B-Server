
const mongoose = require('mongoose');

const Silk = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: [
            'Mulberry Silk',
            'Tussar Silk',
            'Eri Silk',
            'Muga Silk',
            'Raw Silk',
            'Organza Silk'
        ]
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Pure Silk (100% Silk)',
            'Silk-Cotton Blend (Blend: 50-70% Silk, 30-50% Cotton)',
            'Silk-Wool Blend (Blend: 50-70% Silk, 30-50% Wool)',
            'Silk-Cashmere Blend (Blend: 50-70% Silk, 30-50% Cashmere)',
            'Silk-Polyester Blend (Blend: 50-70% Silk, 30-50% Polyester)',
            'Silk-Linen Blend (Blend: 50-70% Silk, 30-50% Linen)',
            'Silk-Bamboo Blend (Blend: 70% Silk, 30% Bamboo)',
            'Silk-Modal Blend (Blend: 60-70% Silk, 30-40% Modal)',
            'Silk-Tussar Blend (Blend: 60% Silk, 40% Tussar Silk)'
        ]
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: [
            'Hand Spinning, Hand Weaving',
            'Hand Spinning, Machine Weaving',
            'Machine Spinning, Machine Weaving'
        ]
    },
    productCertifications: [{
        type: String,
        required: true,
        enum: [
            'Badges',
            'Blockchain Traceability'
        ]
    }],
    plyType: [{
        type: String,
        required: true,
        enum: [
            'Single-Ply',
            'Two-Ply',
            'Three-Ply',
            'Four-Ply or More'
        ]
    }],
    weavingType: [{
        type: String,
        required: true,
        enum: [
            'Satin Weave',
            'Twill Weave',
            'Plain Weave',
            'Jacquard Weave',
            'Organza Weave',
            'Brocade Weave',
            'Crepe Weave',
            'Chiffon Weave',
            'Georgette Weave'
        ]
    }],
    dyeTypes: [{
        type: String,
        required: true,
        enum: [
            'Natural-Dyed',
            'Vegetable-Dyed',
            'Chemical-Dyed',
            'Acid-Dyed'
        ]
    }],
    otherDyeTypes: [{
        type: String,
        required: true,
        enum: [
            'Eco-Dyed',
            'Azo-Free Dyed',
            'Tie-Dyed',
            'Ombre-Dyed',
            'Piece-Dyed',
            'Hand-Painted or Brush-Dyed'
        ]
    }],
    productLineAndSize: [{
        type: String,
        required: true,
        enum: [
            'Shawls - 80\"x40\" (203 cm x 102 cm)',
            'Stoles - 70\"x30\" (178 cm x 76 cm)',
            'Scarves - 60\"x20\" (152 cm x 51 cm)',
            'Wraps - 90\"x35\" (229 cm x 89 cm)',
            'Ponchos - Customizable (typically around 34\"x40\" / 86 cm x 102 cm)',
            'Sarees - 6 yards x 1.25 yards (550 cm x 115 cm)',
            'Dupattas - 100\"x40\" (254 cm x 102 cm)'
        ]
    }],
    colorShades: [{
        type: String,
        required: true,
        enum: [
            'Ivory/Cream', 'Beige/Taupe', 'Gray/Charcoal', 'Black', 'Navy Blue',
            'Brown/Chocolate', 'Blush Pink', 'Powder Blue', 'Mint Green', 'Lavender',
            'Emerald Green', 'Ruby Red', 'Sapphire Blue', 'Amethyst Purple',
            'Olive Green', 'Terracotta/Brick Red', 'Mustard Yellow', 'Scarlet Red',
            'Turquoise', 'Sunshine Yellow', 'Coral', 'Gold', 'Silver', 'Champagne',
            'Bronze', 'Wine/Burgundy', 'Forest Green', 'Plum', 'Teal',
            'Ombre Effects (e.g., Blue Ombre)', 'Two-Tone Combinations (e.g., Gray & Pink)',
            'Snow White', 'Antique White', 'Pearl White'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: [
            'Full Dense Embroidery - Guldast Kaam',
            'Full Border Embroidery - Purnai Haash',
            'Allover Embroidery - Jaalidar',
            'Motif Embroidery - Bootidar',
            'End Panel Embroidery – Palldar',
            'Narrow Border Embroidery - Hashidar',
            'Wide Border Embroidery - Dordar',
            'Dense Allover Embroidery – Jamawar',
            'Double Border Embroidery - Dobor Haash',
            'Reverse Embroidery - Do-Rukh Kaam',
            'Embossed Embroidery - Ubharav Kaam',
            'Metal Thread Embroidery - Zardozi Dozi',
            'Papier Mâché Embroidery - Naqashidar Kaam'
        ]
    }]
});

module.exports = mongoose.model('Silk', Silk);
