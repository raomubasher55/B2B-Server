const mongoose = require('mongoose');

const enamelwareSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Enamel-Coated Silver', 'Enamel-Coated Bronze', 'Enamel-Coated Steel', 'Enamel-Coated Iron'],
    required: true
  },
  quality: {
    type: [String],
    enum: ['Handcrafted', 'Premium Quality Finish', 'Eco-Friendly Materials'],
    required: true
  },
  productTypes: [{
    name: {
      type: String,
      enum: [
        'Enamel Plates',
        'Enamel Bowls',
        'Enamel Serving Trays',
        'Enamel Tea Sets',
        'Enamel Mugs',
        'Enamel Serving Spoons',
        'Enamel Kettles',
        'Enamel Dish Covers',
        'Enamel Tumblers',
        'Enamel Water Bottles',
        'Enamel Serving Bowls'
      ],
      required: true
    },
    dimensions: { type: String, required: true }
  }],
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
    enum: ['Glossy Finish', 'Matte Finish', 'Decorative Painting'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShades: {
    type: [String],
    enum: ['Bright Colors', 'Traditional Colors', 'Pastel Shades'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Hand-Painted Designs', 'Inlaid Work', 'Decorative Carvings'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Enamelware', enamelwareSchema);
