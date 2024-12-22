const mongoose = require('mongoose');

const BedLinenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    required: true,
    enum: ["Cotton", "Silk", "Wool", "Linen"]
  },
  quality: {
    type: [String],
    enum: [
      "100% Cotton",
      "Pure Silk",
      "Merino Wool",
      "Handcrafted Fabrics",
      "Eco-Friendly Materials"
    ]
  },
  productTypesAndSizes: [
    {
      productType: { type: String, required: true },
      dimensions: { type: String, required: true }
    }
  ],
  productionProcess: {
    type: String,
    required: true,
    enum: ["Handcrafted", "Machine-Made", "Traditional Techniques"]
  },
  designAndPatterns: {
    type: [String],
    enum: [
      "Floral Patterns",
      "Geometric Designs",
      "Traditional Kashmiri Motifs",
      "Abstract Designs",
      "Custom Designs"
    ]
  },
  finishingTechniques: {
    type: [String],
    enum: ["Hand-Painted", "Embroidered", "Screen-Printed", "Block-Printed"]
  },
  certifications: {
    type: [String],
    enum: [
      "Handcrafted Badge",
      "Eco-Friendly Certification",
      "Authenticity Certificate"
    ]
  },
  colorShades: {
    type: [String],
    enum: [
      "White",
      "Beige",
      "Gray",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Blush Pink",
      "Mint Green",
      "Light Blue"
    ]
  },
  embellishments: {
    type: [String],
    enum: ["Embroidery", "Lace Detailing", "Appliqué Work"]
  }
});

module.exports = mongoose.model('BedLinen', BedLinenSchema);
