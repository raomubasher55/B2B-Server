// models/FranchiseApplication.js
const mongoose = require('mongoose');

// Schema for franchise application
const franchiseApplicationSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
  },
  contactPhone: {
    type: String,
    required: true
  },
  companyName: String,
  position: {
    type: String,
    required: true
  },
  businessRegistrationNumber: String,
  countryOfResidence: {
    type: String,
    required: true
  },
  website: String,
  yearsOfExperience: Number,
  previousFranchiseExperience: Boolean,
  previousFranchiseDetails: String,
  businessStructure: String,
  numberOfEmployees: Number,
  annualRevenueRange: String,
  proposedLocation: String,
  locationType: [String],
  spaceSize: Number,
  footTraffic: String,
  siteAgreement: Boolean,
  investmentAvailable: Number,
  financingOption: String,
  estimatedBudget: Number,
  franchiseFeesAgreement: Boolean,
  businessGoals: [String],
  targetCustomerDemographic: [String],
  uniqueValueProposition: String,
  projectedMonthlySales: Number,
  projectedMonthlyExpenses: Number,
  isPrimaryOperator: Boolean,
  managerDetails: String,
  numberOfStaff: Number,
  trainingNeeds: [String],
  inventoryManagement: String,
  socialMediaLinks: Object,
  marketingExperience: String,
  marketingSupportNeeds: [String],
  ecoFriendlyAdoption: Boolean,
  sustainabilityCompliance: Boolean,
  certifications: [String],
  documentUploads: [String],
  signature: String,
  dateSigned: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for authentication
    required: true
  }
});

// Export the model
module.exports = mongoose.model('FranchiseApplication', franchiseApplicationSchema);
