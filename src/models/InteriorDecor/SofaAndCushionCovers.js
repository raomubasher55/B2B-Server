const mongoose = require('mongoose');

const sofaAndCushionCoverSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Cotton', 'Silk', 'Wool', 'Velvet'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['100% Cotton', 'Pure Silk', 'Merino Wool', 'Handcrafted Fabrics', 'Eco-Friendly Materials'],
    required: true
  },
  productTypesAndSizes: [{
    productType: {
      type: String,
      enum: ['Standard Sofa Cover', 'Loveseat Cover', 'Sectional Sofa Cover', 'Square Cushion Cover', 'Rectangular Cushion Cover', 'Bolster Cushion Cover', 'Throw Blanket'],
      required: true
    },
    dimensions: {
      type: String,
      required: true
    }
  }],
  productionProcess: {
    type: String,
    enum: ['Handcrafted', 'Machine-Made', 'Traditional Techniques'],
    required: true
  },
  designAndPatterns: {
    type: [String],
    enum: ['Floral Patterns', 'Geometric Designs', 'Traditional Kashmiri Motifs', 'Abstract Designs', 'Custom Designs'],
    required: true
  },
  finishingTechniques: {
    type: [String],
    enum: ['Hand-Painted', 'Embroidered', 'Screen-Printed', 'Block-Printed'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShades: {
    type: [String],
    enum: ['White', 'Beige', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Blush Pink', 'Mint Green', 'Light Blue'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Embroidery', 'Lace Detailing', 'Appliqué Work'],
    required: true
  }
});

const SofaAndCushionCover = mongoose.model('SofaAndCushionCover', sofaAndCushionCoverSchema);

module.exports = SofaAndCushionCover;
