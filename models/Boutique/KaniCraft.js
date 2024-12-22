const mongoose = require('mongoose');

const KaniCraft = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: [String],
        required: true,
        enum: ["Pashmina Wool", "Cashmere Wool"]
    },
    quality: {
        type: [String],
        required: true,
        enum: [
            "Pure Pashmina (100% Pashmina)",
            "Pashmina-Silk Blend (Blend: 70% Pashmina, 30% Silk)"
        ]
    },
    productionProcess: {
        type: String,
        required: true,
        enum: [
            "Hand Spinning, Hand Weaving",
            "Hand Spinning, Machine Weaving",
            "Machine Spinning, Hand Weaving"
        ]
    },
    productCertifications: {
        type: [String],
        enum: ["GIS Tag (Geographical Indication)", "GI Certificate", "Blockchain Traceability"]
    },
    plyType: {
        type: [String],
        enum: ["Single-Ply", "Two-Ply", "Three-Ply"]
    },
    designAndPatternTypes: {
        type: [String],
        enum: [
            "Paisley", "Floral Patterns", "Geometric Patterns", "Tree of Life", "Abstract Patterns"
        ]
    },
    dyeTypes: {
        type: [String],
        enum: ["Natural-Dyed", "Vegetable-Dyed", "Chemical-Dyed"]
    },
    otherDyeTypes: {
        type: [String],
        enum: ["Eco-Dyed", "Azo-Free Dyed", "Piece-Dyed", "Hand-Painted"]
    },
    productLineAndSize: {
        type: [String],
        enum: [
            "Shawls - 80\"x40\" (203 cm x 102 cm)",
            "Stoles - 70\"x30\" (178 cm x 76 cm)",
            "Scarves - 60\"x20\" (152 cm x 51 cm)",
            "Wraps - 90\"x35\" (229 cm x 89 cm)",
            "Sarees - 6 yards x 1.25 yards (550 cm x 115 cm)"
        ]
    },
    colorShades: {
        type: [String],
        enum: [
            "Ivory/Cream", "Maroon", "Indigo Blue", "Saffron Yellow", "Forest Green", // Traditional
            "Soft Pink", "Powder Blue", "Mint Green", // Pastels
            "Ruby Red", "Turquoise", "Royal Blue", // Bold
            "Emerald Green", "Sapphire Blue", "Amethyst Purple", // Jewel Tones
            "Gold", "Silver" // Metallic
        ]
    },
    embellishments: {
        type: [String],
        enum: ["Kani Tassels", "Hand-embroidered Borders", "Traditional Knotting"]
    }
});

module.exports = mongoose.model('KaniCraft', KaniCraft);
