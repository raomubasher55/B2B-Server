const mongoose = require('mongoose');

const jeweledWallHangingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Fabric', 'Metal'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['Handcrafted', 'Premium Quality Finish', 'Eco-Friendly Materials'],
    required: true
  },
  productTypes: [{
    type: String,
    enum: ['Jewel Embellished Panels', 'Embossed Wall Hangings Embedded with Metals'],
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
    enum: ['Fringing', 'Backing', 'Binding', 'Lining', 'Mounting', 'Stiffening'],
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
    enum: ['Mirror Work', 'Beaded Work', 'Zardozi Embroidery', 'Sequins', 'Precious and Semi-Precious Metals'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('JeweledWallHanging', jeweledWallHangingSchema);
