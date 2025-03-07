const mongoose = require('mongoose');

const copperwareSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Copper', 'Brass', 'Bronze'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['Handcrafted', 'Premium Quality Finish', 'Eco-Friendly Materials'],
    required: true
  },
  productTypes: [{
    type: String,
    enum: [
      'Copper Plates',
      'Copper Bowls',
      'Copper Serving Trays',
      'Copper Kettles',
      'Copper Tea Sets',
      'Copper Glasses'
    ],
    required: true
  }],
  dimensions: {
    type: String,
    required: true
  },
  productionProcess: {
    type: String,
    enum: ['Handcrafted', 'Machine-Made'],
    required: true
  },
  designPatternTypes: {
    type: [String],
    enum: [
      'Traditional Kashmiri Motifs',
      'Floral Patterns',
      'Geometric Designs',
      'Custom Designs'
    ],
    required: true
  },
  finishingTechniques: {
    type: [String],
    enum: ['Polished Finish', 'Antiqued Finish', 'Hammered Finish'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShades: {
    type: [String],
    enum: ['Natural Copper (shiny)', 'Antique Copper (dull)'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Engraved Patterns', 'Inlaid Work', 'Etched Designs'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Copperware', copperwareSchema);
