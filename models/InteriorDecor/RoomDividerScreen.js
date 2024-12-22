const mongoose = require('mongoose');

const roomDividerScreenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Wood', 'Papier-Mâché', 'Fabric', 'Metal'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['Handcrafted Wood', 'Eco-Friendly Materials', 'Premium Quality Finish'],
    required: true
  },
  productTypes: [{
    type: String,
    enum: ['Standard Folding Screen', 'Three-Panel Folding Screen', 'Wall-Mounted Decorative Screen', 'Freestanding Decorative Screen', 'Custom Design Options Available'],
    required: true
  }],
  dimensions: {
    type: String,
    required: true
  },
  productionProcess: {
    type: String,
    enum: ['Handcrafted', 'Machine-Made', 'Traditional Techniques'],
    required: true
  },
  designPatternTypes: {
    type: [String],
    enum: ['Floral Patterns', 'Geometric Designs', 'Traditional Kashmiri Motifs', 'Abstract Designs', 'Custom Designs'],
    required: true
  },
  finishingTechniques: {
    type: [String],
    enum: ['Hand-Painted', 'Varnished', 'Lacquered', 'Textured Finishes'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShadesFabric: {
    type: [String],
    enum: ['White', 'Beige', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Blush Pink', 'Mint Green', 'Light Blue'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Mirror Work', 'Metallic Thread', 'Carvings'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RoomDividerScreen', roomDividerScreenSchema);
