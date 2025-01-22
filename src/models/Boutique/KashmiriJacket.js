const mongoose = require('mongoose');

const KashmiriJacket = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: ['Wool', 'Cashmere', 'Silk', 'Cotton', 'Velvet', 'Leather']
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Pure Wool',
            'Pure Cashmere',
            'Wool-Cotton Blend',
            'Silk-Wool Blend',
            'Embossed or Embroidered Leather'
        ]
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: [
            'Hand Spinning, Hand Weaving',
            'Machine Weaving',
            'Handcrafted',
            'Machine Stitching'
        ]
    },
    embroideryTypes: [{
        type: String,
        required: true,
        enum: [
            'Aari Work',
            'Sozni Embroidery',
            'Tilla Work (Gold/Silver Thread Embroidery)',
            'Chain Stitch Embroidery',
            'Zardozi Embroidery'
        ]
    }],
    designAndPatternTypes: [{
        type: String,
        required: true,
        enum: [
            'Paisley',
            'Floral Patterns',
            'Geometric Patterns',
            'Traditional Kashmiri Motifs',
            'Minimalist Designs'
        ]
    }],
    dyeTypes: [{
        type: String,
        required: true,
        enum: ['Natural-Dyed', 'Vegetable-Dyed', 'Chemical-Dyed']
    }],
    otherDyeTypes: [{
        type: String,
        required: true,
        enum: ['Eco-Dyed', 'Azo-Free Dyed']
    }],
    productLineAndSize: [{
        type: String,
        required: true,
        enum: [
            'Short Jacket - Length: 24-26 inches (61-66 cm)',
            'Long Coat - Length: 36-40 inches (91-102 cm)',
            'Overcoat - Length: 42-48 inches (107-122 cm)',
            'Bomber Jacket - Length: 22-24 inches (56-61 cm)',
            'Blazer - Length: 28-30 inches (71-76 cm)'
        ]
    }],
    sizesAvailable: [{
        type: String,
        required: true,
        enum: ['Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)', 'Custom Fit']
    }],
    colorShades: [{
        type: String,
        required: true,
        enum: [
            'Black', 'Navy Blue', 'Beige', 'Gray', 'Maroon', 'Deep Green', 'Ivory', 'Saffron Yellow',
            'Ruby Red', 'Royal Blue', 'Coral', 'Turquoise', 'Blush Pink', 'Mint Green',
            'Soft Lavender', 'Gold (in Tilla Work)', 'Silver (in Tilla Work)'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: [
            'Tilla Borders',
            'Embroidered Cuffs and Collars',
            'Mirror Work',
            'Beaded Detailing',
            'Sequins'
        ]
    }]
});

module.exports = mongoose.model('KashmiriJacket', KashmiriJacket);
