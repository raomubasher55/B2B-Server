const mongoose = require('mongoose');

const VendorApplicationSchema = new mongoose.Schema({
    vendorInformation: {
        businessName: { type: String, required: true },
        registrationNumber: { type: String, required: true },
        countryOfRegistration: { type: String, required: true },
        primaryContact: {
            name: { type: String, required: true },
            jobTitle: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true }
        },
        businessAddress: { type: String, required: true },
        website: { type: String }
    },
    businessDetails: {
        yearsInOperation: { type: Number, required: true },
        typeOfBusiness: [{ type: String, required: true }],
        businessStructure: { type: String, required: true },
        numberOfEmployees: { type: Number, required: true },
        annualRevenueRange: { type: String, required: true }
    },
    productInformation: {
        categories: [{ type: String, required: true }],
        numberOfProducts: { type: Number, required: true },
        primaryMaterials: { type: String, required: true },
        priceRange: { type: String, required: true },
        qualityCertification: { type: String },
        complianceWithStandards: { type: String, required: true }
    },
    exportReadiness: {
        countriesOfInterest: [{ type: String, required: true }],
        priorExperience: {
            hasExperience: { type: Boolean, required: true },
            countries: { type: String }
        },
        preferredIncoterms: { type: String, required: true },
        documentationReadiness: [{ type: String, required: true }],
        packagingStandards: [{ type: String, required: true }]
    },
    complianceAndCertifications: {
        ethicalSourcing: { type: String, required: true },
        certifications: [{ type: String }],
        safetyCertifications: [{ type: String }]
    },
    shippingAndLogistics: {
        preferredShippingMethod: { type: String, required: true },
        shippingDestinations: [{ type: String, required: true }],
        returnPolicy: { type: String, required: true },
        inventoryManagement: { type: String, required: true },
        warehouseRequirements: [{ type: String }]
    },
    digitalMarketing: {
        socialMedia: {
            facebook: { type: String },
            instagram: { type: String },
            twitter: { type: String },
            linkedin: { type: String },
            other: { type: String }
        },
        brandStory: { type: String, required: true },
        marketingMaterials: [{ type: String }],
        internationalMarketingAssistance: { type: String, required: true }
    },
    partnershipGoals: {
        primaryGoals: [{ type: String, required: true }],
        supportNeeds: [{ type: String, required: true }]
    },
    documentUploads: {
        businessRegistrationCertificate: { type: String },
        taxIdentificationNumber: { type: String },
        exportLicense: { type: String },
        productCertifications: [{ type: String }],
        qualityCertifications: [{ type: String }],
        productCatalog: { type: String }
    },
    agreementAndAcknowledgement: {
        termsAccepted: { type: Boolean, required: true },
        codeOfConductAccepted: { type: Boolean, required: true },
        verificationConfirmed: { type: Boolean, required: true }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('VendorApplication', VendorApplicationSchema);
