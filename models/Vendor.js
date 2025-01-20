const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  countryOfRegistration: { type: String, required: true },
  primaryContactPerson: { type: String, required: true },
  jobTitle: { type: String },
  contactEmail: { type: String, required: true },
  phoneNumber: { type: String },
  website: { type: String },
  yearsInOperation: { type: Number },
  typeOfBusiness: [{ type: String }],
  businessStructure: { type: String },
  numberOfEmployees: { type: Number },
  annualRevenueRange: { type: String },
  productCategories: [{ type: String }],
  averagePriceRange: { type: String },
  primaryMaterials: { type: String },
  handmadeStatus: { type: String },
  productCertifications: [{ type: String }],
  exhibitionGoals: [{ type: String }],
  preferredExhibitionType: [{ type: String }],
  availabilityForEvents: { type: String },
  numberOfProducts: { type: Number },
  specialDisplayRequirements: [{ type: String }],
  socialMedia: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    linkedIn: { type: String },
    other: { type: String },
  },
  brandStory: { type: String },
  marketingMaterials: [{ type: String }],
  marketingAssistance: { type: String },
  boothSize: { type: String },
  boothSetupSupport: { type: Boolean },
  boothFeatures: [{ type: String }],
  productSamples: { type: String },
  inventoryManagement: { type: String },
  complianceStandards: { type: String },
  certificationsHeld: [{ type: String }],
  documents: {
    businessRegistration: { type: String },
    taxId: { type: String },
    productCertifications: { type: String },
    qualityCertifications: { type: String },
    productPortfolio: { type: String },
    marketingSamples: { type: String },
  },
  termsAgreement: { type: Boolean, required: true },
  codeOfConductAgreement: { type: Boolean, required: true },
  verification: { type: Boolean, required: true },
  authorizedRepresentative: { type: String },
  submissionDate: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Vendor", VendorSchema);
