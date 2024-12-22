const mongoose = require('mongoose');

const KashmiriBagsAndPurse = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: ['Wool', 'Silk', 'Cotton', 'Leather', 'Canvas', 'Jute', 'Velvet']
    }],
    quality: [{
        type: String,
        required: true,
        enum: ['Pure Wool', 'Silk-Cotton Blend', 'Embroidered Leather', 'Kashmiri Pashmina']
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: ['Handcrafted', 'Machine Stitching']
    },
    productCertifications: [{
        type: String,
        required: true,
        enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate']
    }],
    embroideryTypes: [{
        type: String,
        required: true,
        enum: ['Aari Work', 'Chain Stitch Embroidery', 'Papier Mâché Inspired Embroidery', 'Sozni Embroidery', 'Zardozi Embroidery']
    }],
    designAndPatternTypes: [{
        type: String,
        required: true,
        enum: ['Paisley', 'Floral Patterns', 'Geometric Patterns', 'Traditional Kashmiri Motifs', 'Abstract Patterns']
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
        enum: ['Clutch - 8" x 4"', 'Shoulder Bag - 12" x 10" x 4"', 'Tote Bag - 16" x 14" x 5"', 'Sling Bag - 8" x 10" x 2"', 'Backpack - 16" x 12" x 6"', 'Coin Purse - 4" x 3"']
    }],
    colorShades: [{
        type: String,
        required: true,
        enum: [
            'Black', 'Navy Blue', 'Beige', 'Gray',
            'Saffron Yellow', 'Maroon', 'Deep Green', 'Ivory',
            'Ruby Red', 'Royal Blue', 'Coral', 'Turquoise',
            'Blush Pink', 'Mint Green', 'Soft Lavender',
            'Gold', 'Silver', 'Bronze'
        ]
    }],
    embellishments: [{
        type: String,
        required: true,
        enum: ['Tassels', 'Mirror Work', 'Beaded Detailing', 'Sequins', 'Metallic Threads']
    }]
});

module.exports = mongoose.model('KashmiriBagsAndPurse', KashmiriBagsAndPurse);
