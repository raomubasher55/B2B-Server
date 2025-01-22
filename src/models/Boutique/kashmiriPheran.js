const mongoose = require('mongoose');

const KashmiriPheranSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: [
            'Wool', 'Cashmere', 'Silk', 'Cotton', 'Khadi',
            'Tweed', 'Blazer Fabric', 'Funnel Fabric'
        ]
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Pure Wool', 'Pure Cashmere', 'Wool-Cotton Blend',
            'Handwoven Khadi', 'Tweed Quality', 'Blazer Quality'
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
            'Floral Patterns',
            'Paisley',
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
            'Long Pheran - Length: 45-50 inches (114-127 cm)',
            'Short Pheran - Length: 36-40 inches (91-102 cm)'
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
            'Black', 'Beige', 'Gray', 'Maroon', 'Saffron Yellow', 'Deep Green',
            'Ruby Red', 'Royal Blue', 'Coral', 'Blush Pink', 'Mint Green'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: [
            'Tilla Borders',
            'Embroidered Sleeves',
            'Mirror Work',
            'Beaded Detailing',
            'Sequins'
        ]
    }]
});

module.exports = mongoose.model('KashmiriPheran', KashmiriPheranSchema);
