const mongoose = require('mongoose');

// Define the schema for the Brick-and-Mortar application form
const BrickAndMortarSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    },
    businessRegistrationNumber: {
        type: String,
        required: true
    },
    countryOfRegistration: {
        type: String,
        required: true
    },
    primaryContactPerson: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        required: true
    },
    websiteUrl: String,
    yearsInOperation: Number,
    businessType: [String],
    businessStructure: String,
    numberOfEmployees: Number,
    annualRevenueRange: String,
    productCategories: [String],
    productCount: Number,
    primaryMaterials: String,
    averagePriceRange: String,
    productQualityCertification: String,
    handmade: Boolean,
    packagingStandards: [String],
    retailDisplayExperience: String,
    ethicalSourcingCompliance: Boolean,
    certificationsHeld: [String],
    inventorySupplyMethod: String,
    stockLevels: String,
    restockingFrequency: String,
    inventoryManagementSystem: String,
    productDelivery: String,
    returnPolicy: String,
    socialMediaPresence: {
        facebook: String,
        instagram: String,
        twitter: String,
        linkedin: String,
        other: String
    },
    brandStory: String,
    marketingMaterialsAvailable: [String],
    marketingSupportRequired: Boolean,
    partnershipGoals: [String],
    supportNeeds: [String],
    documentUploads: [String],
    agreementTermsAccepted: Boolean,
    codeOfConductAccepted: Boolean,
    verificationConfirmed: Boolean,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User (assuming authentication middleware)
}, { timestamps: true });

module.exports = mongoose.model('BrickAndMortar', BrickAndMortarSchema);
