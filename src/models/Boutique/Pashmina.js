const mongoose = require('mongoose');

const Pashmina = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    materialType: {
        type: String,
        required: true,
        enum: [
            "Ultra-Fine Pashmina",
            "Fine Pashmina",
            "Standard Pashmina"
        ]
    },
    quality: {
        type: String,
        required: true,
        enum: [
            "Pure Pashmina",
            "Pashmina-Silk Blend",
            "Pashmina-Wool Blend",
            "Pashmina-Cashmere Blend",
            "Pashmina-Cotton Blend",
            "Pashmina-Bamboo Blend",
            "Pashmina-Linen Blend",
            "Pashmina-Angora Blend",
            "Pashmina-Vicuna Blend",
            "Pashmina-Acrylic Blend",
            "Pashmina-Merino Wool Blend",
            "Pashmina-Alpaca Blend",
            "Pashmina-Modal Blend",
            "Pashmina-Tussar Silk Blend",
            "Pashmina-Polyester Blend"
        ]
    },
    productionProcess: {
        type: String,
        required: true,
        enum: [
            "Hand Spinning, Hand Weaving",
            "Hand Spinning, Machine Weaving",
            "Machine Spinning, Machine Weaving"
        ]
    },
    productCertifications: {
        type: [String],
        enum: [
            "GI Tag",
            "GI Certificate",
            "Badges",
            "Blockchain Traceability"
        ]
    },
    plyType: {
        type: [String],
        enum: [
            "Single-Ply",
            "Two-Ply",
            "Three-Ply",
            "Four-Ply or More"
        ]
    },
    typeOfWeaving: {
        type: [String],
        enum: [
            "Kani Weave - Kani Bunai",
            "Twill Weave - Lehri Bunai",
            "Diamond Weave - Heerat Bunai",
            "Herringbone Weave - Machh Bunai",
            "Reversible Weave - Do-Rukh Bunai",
            "Jacquard Weave - Naksh Bunai",
            "Basket Weave - Tokri Bunai",
            "Plain Weave - Sada Bunai",
            "Satin Weave - Chamk Bunai",
            "Honeycomb Weave - Shehad Bunai"
        ]
    },
    dyeTypes: {
        type: [String],
        enum: [
            "Natural-Dyed",
            "Vegetable-Dyed",
            "Chemical-Dyed",
            "Acid-Dyed"
        ]
    },
    otherDyeTypes: {
        type: [String],
        enum: [
            "Eco-Dyed",
            "Azo-Free Dyed",
            "Tie-Dyed",
            "Ombre-Dyed",
            "Piece-Dyed",
            "Hand-Painted or Brush-Dyed"
        ]
    },
    productLineAndSize: {
        type: [String],
        enum: [
            "Shawls - 80\"x40\" (203 cm x 102 cm)",
            "Stoles - 70\"x30\" (178 cm x 76 cm)",
            "Scarves - 60\"x20\" (152 cm x 51 cm)",
            "Wraps - 90\"x35\" (229 cm x 89 cm)",
            "Ponchos - Customizable (typically around 34\"x40\" / 86 cm x 102 cm for the main body)",
            "Sarees - 6 yards x 1.25 yards (550 cm x 115 cm)"
        ]
    },
    colorShades: {
        type: [String],
        enum: [
            "Ivory/Cream",
            "Beige/Taupe",
            "Gray/Charcoal",
            "Black",
            "Navy Blue",
            "Brown/Chocolate",
            "Blush Pink",
            "Powder Blue",
            "Mint Green",
            "Lavender",
            "Emerald Green",
            "Ruby Red",
            "Sapphire Blue",
            "Amethyst Purple",
            "Olive Green",
            "Terracotta/Brick Red",
            "Mustard Yellow",
            "Scarlet Red",
            "Turquoise",
            "Sunshine Yellow",
            "Coral",
            "Gold",
            "Silver",
            "Champagne",
            "Bronze",
            "Wine/Burgundy",
            "Forest Green",
            "Plum",
            "Teal",
            "Ombre Effects (e.g., Blue Ombre)",
            "Two-Tone Combinations (e.g., Gray & Pink)",
            "Snow White",
            "Antique White",
            "Pearl White"
        ]
    },
    embellishments: {
        type: [String],
        enum: [
            "Full Dense Embroidery - Guldast Kaam",
            "Full Border Embroidery - Purnai Haash",
            "Allover Embroidery - Jaalidar",
            "Motif Embroidery - Bootidar",
            "End Panel Embroidery – Palldar",
            "Narrow Border Embroidery - Hashidar",
            "Wide Border Embroidery - Dordar",
            "Dense Allover Embroidery– Jamawar",
            "Double Border Embroidery - Dobor Haash",
            "Reverse Embroidery - Do-Rukh Kaam",
            "Embossed Embroidery - Ubharav Kaam",
            "Metal Thread Embroidery - Zardozi Dozi",
            "Papier Mâché Embroidery - Naqashidar Kaam"
        ]
    }
});

module.exports = mongoose.model('Boutique', Pashmina);
