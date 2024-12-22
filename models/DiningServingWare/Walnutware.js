const mongoose = require('mongoose');

const walnutwareSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Walnut Wood', 'Lacquer Finish', 'Natural Stain'],
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
        'Walnut Serving Plates',
        'Walnut Bowls',
        'Walnut Serving Trays',
        'Walnut Coasters',
        'Walnut Utensils',
        'Walnut Cheese Boards',
        'Mortar and Pestle',
        'Decorative Bowls',
        'Walnut Trays with Handles',
        'Walnut Snack Bowls',
        'Forks',
        'Spoons',
        'Slate Spoons',
        'Soup Spoons',
        'Spatula',
        'Salt and Pepper Shakers',
        'Candle Holders',
        'Cutting Boards',
        'Fruit Bowls',
        'Serving Bowls',
        'Cups'
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
      'Intricate Carvings',
      'Floral Motifs',
      'Geometric Designs',
      'Custom Designs'
    ],
    required: true
  },
  finishingTechniques: {
    type: [String],
    enum: ['Natural Finish', 'Lacquered Finish', 'Stained Finish'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShades: {
    type: [String],
    enum: ['Natural Walnut', 'Dark Stain', 'Light Stain'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Inlaid Work', 'Engraved Designs', 'Lacquer Detailing'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Walnutware', walnutwareSchema);
