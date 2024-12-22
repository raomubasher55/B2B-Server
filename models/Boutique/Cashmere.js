const mongoose = require('mongoose');

const Cashmere = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        enum: [
            'Ultra-Fine Cashmere (10-12 microns)',
            'Fine Cashmere (12-14 microns)',
            'Standard Cashmere (14-16 microns)'
        ],
        required: true
    }],
    quality: [{
        type: String,
        enum: [
            'Pure Cashmere (Blend: 100% Cashmere)',
            'Cashmere-Silk Blend (Blend: 70% Cashmere, 30% Silk)',
            'Cashmere-Wool Blend (Blend: 50-70% Cashmere, 30-50% Wool)',
            'Cashmere-Cotton Blend (Blend: 50-70% Cashmere, 30-50% Cotton)',
            'Cashmere-Bamboo Blend (Blend: 70% Cashmere, 30% Bamboo)',
            'Cashmere-Linen Blend (Blend: 60-70% Cashmere, 30-40% Linen)',
            'Cashmere-Angora Blend (Blend: 70% Cashmere, 30% Angora)',
            'Cashmere-Polyester Blend (Blend: 50-70% Cashmere, 30-50% Polyester)',
            'Cashmere-Merino Wool Blend (Blend: 60-70% Cashmere, 30-40% Merino Wool)',
            'Cashmere-Alpaca Blend (Blend: 60% Cashmere, 40% Alpaca)',
            'Cashmere-Modal Blend (Blend: 50-70% Cashmere, 30-50% Modal)',
            'Cashmere-Tussar Silk Blend (Blend: 60% Cashmere, 40% Tussar Silk)'
        ],
        required: true
    }],
    productionProcess: {
        type: String,
        enum: [
            'Hand Spinning, Hand Weaving',
            'Hand Spinning, Machine Weaving',
            'Machine Spinning, Machine Weaving'
        ],
        required: true
    },
    productCertifications: [{
        type: String,
        enum: [
            'Badges',
            'Blockchain Traceability'
        ],
        required: true
    }],
    plyType: [{
        type: String,
        enum: [
            'Single-Ply',
            'Two-Ply',
            'Three-Ply',
            'Four-Ply or More'
        ],
        required: true
    }],
    weavingType: [{
        type: String,
        enum: [
            'Kani Weave - Kani Bunai',
            'Twill Weave - Lehri Bunai',
            'Diamond Weave - Heerat Bunai',
            'Herringbone Weave - Machh Bunai',
            'Reversible Weave - Do-Rukh Bunai',
            'Jacquard Weave - Naksh Bunai',
            'Basket Weave - Tokri Bunai',
            'Plain Weave - Sada Bunai',
            'Satin Weave - Chamk Bunai',
            'Honeycomb Weave - Shehad Bunai'
        ],
        required: true
    }],
    dyeTypes: [{
        type: String,
        enum: [
            'Natural-Dyed',
            'Vegetable-Dyed',
            'Chemical-Dyed',
            'Acid-Dyed'
        ],
        required: true
    }],
    otherDyeTypes: [{
        type: String,
        enum: [
            'Eco-Dyed',
            'Azo-Free Dyed',
            'Tie-Dyed',
            'Ombre-Dyed',
            'Piece-Dyed',
            'Hand-Painted or Brush-Dyed'
        ],
        required: true
    }],
    productLineAndSize: [{
        type: String,
        enum: [
            'Shawls - 80"x40" (203 cm x 102 cm)',
            'Stoles - 70"x30" (178 cm x 76 cm)',
            'Scarves - 60"x20" (152 cm x 51 cm)',
            'Wraps - 90"x35" (229 cm x 89 cm)',
            'Ponchos - Customizable (typically around 34"x40" / 86 cm x 102 cm)',
            'Sarees - 6 yards x 1.25 yards (550 cm x 115 cm)'
        ],
        required: true
    }],
    colorShades: [{
        type: String,
        enum: [
            'Ivory/Cream', 'Beige/Taupe', 'Gray/Charcoal', 'Black', 'Navy Blue',
            'Brown/Chocolate', 'Blush Pink', 'Powder Blue', 'Mint Green', 'Lavender',
            'Emerald Green', 'Ruby Red', 'Sapphire Blue', 'Amethyst Purple',
            'Olive Green', 'Terracotta/Brick Red', 'Mustard Yellow', 'Scarlet Red',
            'Turquoise', 'Sunshine Yellow', 'Coral', 'Gold', 'Silver', 'Champagne',
            'Bronze', 'Wine/Burgundy', 'Forest Green', 'Plum', 'Teal', 'Ombre Effects (e.g., Blue Ombre)',
            'Two-Tone Combinations (e.g., Gray & Pink)', 'Snow White', 'Antique White', 'Pearl White'
        ],
        required: true
    }],
    embellishments: [{
        type: String,
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
        ],
        required: true
    }]
});

module.exports = mongoose.model('Cashmere', Cashmere);
