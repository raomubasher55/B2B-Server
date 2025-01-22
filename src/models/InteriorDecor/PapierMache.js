const mongoose = require('mongoose');

// Schema for Papier-Mâché Interior Decor
const PapierMacheSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: [{
        type: String,
        required: true,
        enum: ['Papier-Mâché', 'Wood', 'Fabric', 'Metal']
    }],
    quality: [{
        type: String,
        required: true,
        enum: [
            'Handcrafted Papier-Mâché',
            'Premium Quality Finish',
            'Eco-Friendly Materials'
        ]
    }],
    productTypesAndSizes: [{
        productType: {
            type: String,
            required: true,
            enum: [
                'Wall Art',
                'Bowls and Plates',
                'Decorative Boxes',
                'Figurines',
                'Lamps and Lighting',
                'Furniture Accents',
                'Home Accessories',
                'Games',
                'Wall Clocks',
                'Planters and Pots',
                'Seasonal Decor',
                'Trays'
            ]
        },
        dimensions: { type: String, required: true }
    }],
    productionProcess: {
        type: String,
        required: true,
        enum: ['Handcrafted', 'Machine-Made', 'Traditional Techniques']
    },
    designAndPatterns: [{
        type: String,
        enum: [
            'Floral Patterns',
            'Geometric Designs',
            'Traditional Kashmiri Motifs',
            'Abstract Designs',
            'Custom Designs'
        ]
    }],
    finishingTechniques: [{
        type: String,
        enum: [
            'Hand-Painted',
            'Varnished',
            'Gold/Silver Leaf Application',
            'Textured Finishes'
        ]
    }],
    certifications: [{
        type: String,
        enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate']
    }],
    colorShades: [{
        type: String,
        enum: [
            'White',
            'Beige',
            'Gray',
            'Red',
            'Blue',
            'Green',
            'Yellow',
            'Blush Pink',
            'Mint Green',
            'Light Blue'
        ]
    }],
    embellishments: [{
        type: String,
        enum: ['Mirror Work', 'Metallic Thread']
    }]
}, { timestamps: true });

module.exports = mongoose.model('PapierMache', PapierMacheSchema);
