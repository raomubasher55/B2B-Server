const mongoose = require('mongoose');

// Define the schema for the Consignment Business Partnership Application Form
const ConsignmentBusinessSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    vendorInformation: {
        businessName: String,
        businessRegistrationNumber: String,
        countryOfRegistration: String,
        primaryContactPerson: String,
        jobTitle: String,
        contactEmail: { type: String, required: true },
        phoneNumber: String,
        websiteUrl: String
    },
    businessDetails: {
        yearsInOperation: Number,
        typeOfBusiness: [String],
        businessStructure: String,
        numberOfEmployees: Number,
        annualRevenueRange: String
    },
    productInformation: {
        productCategories: [String],
        numberOfProductsOffered: Number,
        primaryMaterialsUsed: String,
        averagePriceRange: String,
        handmade: Boolean,
        productPackagingStandards: [String]
    },
    consignmentAgreementTerms: {
        preferredConsignmentArrangement: String,
        productReturnPolicy: String,
        inventoryReplenishmentTimeline: String,
        minimumConsignmentTerm: String
    },
    complianceAndCertifications: {
        ethicalSourcingCompliance: String,
        certificationsHeld: [String]
    },
    shippingAndLogistics: {
        preferredShippingMethod: String,
        shippingDestinations: [String],
        inventoryTrackingMethod: String,
        productHandlingAndStorageRequirements: String
    },
    marketingAndBranding: {
        brandStory: String,
        marketingMaterialsAvailable: [String],
        socialMediaPresence: {
            facebook: String,
            instagram: String,
            twitter: String,
            linkedin: String,
            other: String
        },
        promotionalSupportNeeded: [String]
    },
    partnershipGoalsAndSupportNeeds: {
        primaryGoalsForConsignmentPartnership: [String],
        typeOfSupportNeededFromDeKoshurCrafts: [String]
    },
    documentUploads: [String],
    agreementAndAcknowledgement: {
        consignmentTerms: Boolean,
        codeOfConduct: Boolean,
        verification: Boolean
    },
    signatureAndSubmission: {
        authorizedRepresentativeSignature: String,
        date: Date,
        nameOfSignatory: String
    }
}, { timestamps: true });

module.exports = mongoose.model('ConsignmentBusiness', ConsignmentBusinessSchema);
