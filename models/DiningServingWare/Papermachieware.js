const mongoose = require('mongoose');

const papermachiewareSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  materialType: {
    type: [String],
    enum: ['Paper Mache', 'Lacquer Finish', 'Natural Paints'],
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
        'Papier-Mâché Plates',
        'Papier-Mâché Bowls',
        'Papier-Mâché Serving Trays',
        'Papier-Mâché Tea Sets',
        'Papier-Mâché Cups',
        'Papier-Mâché Snack Bowls',
        'Papier-Mâché Coasters',
        'Papier-Mâché Serving Spoons'
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
    enum: ['Lacquer Finish', 'Natural Varnish', 'Decorative Painting'],
    required: true
  },
  certifications: {
    type: [String],
    enum: ['Handcrafted Badge', 'Eco-Friendly Certification', 'Authenticity Certificate'],
    required: true
  },
  colorShades: {
    type: [String],
    enum: ['Bright Colors', 'Earthy Tones', 'Pastel Shades'],
    required: true
  },
  embellishments: {
    type: [String],
    enum: ['Hand-Painted Designs', 'Inlaid Work'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Papermachieware', papermachiewareSchema);
