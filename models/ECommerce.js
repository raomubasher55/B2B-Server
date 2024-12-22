const mongoose = require("mongoose");

const ECommerce = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // Step 1: Basic Information
  businessName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  countryOfOperation: { type: String, required: true },
  website: { type: String },

  // Step 2: Complete Business Information
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  registrationDetails: {
    registrationNumber: { type: String, required: true },
    dateOfRegistration: { type: Date, required: true },
    issuingAuthority: { type: String, required: true },
  },
  annualRevenue: { type: Number },
  productionCapacity: { type: Number, required: true },
  numberOfEmployees: { type: Number, required: true },
  productCategories: [{ type: String, required: true }],
  certifications: [{ type: String }],
  existingPartnerships: { type: String },

  // Step 3: Partnership Selection
  // partnershipType: { type: String, required: true },
  // kpiRequirements: { type: Object },
  // retentionTime: { type: Number },
});

module.exports = mongoose.model("ECommerce", ECommerce);
