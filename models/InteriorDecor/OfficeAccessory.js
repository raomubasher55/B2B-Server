const mongoose = require('mongoose');

const officeAccessorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Wood', 'Papier-Mâché', 'Metal', 'Fabric', 'Leather'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['Handcrafted', 'Eco-Friendly Materials', 'Premium Quality Finish'],
    required: true
  },
  productTypes: [{
    type: String,
    enum: [
      'Standard Desk Organizer', 'Pen Holder', 'Business Card Holder', 'Letter Tray',
      'Desktop File Holder', 'Cushion Cover', 'Coasters', 'Wrist Watch Stand', 
      'Cell Phone Stand', 'Tissue Box Cover', 'Book Stand', 'Book Box', 'Magazine Holder'
    ],
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
    enum: ['Hand-Painted', 'Varnished', 'Textured Finishes'],
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

module.exports = mongoose.model('OfficeAccessory', officeAccessorySchema);
