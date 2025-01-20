const mongoose = require('mongoose');

const SubsidiarySchema = new mongoose.Schema({
    applicantName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: true
    },
    countryOfResidence: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    businessExperience: {
        years: {
            type: Number,
            required: true
        },
        franchiseExperience: {
            type: Boolean,
            required: true
        },
        franchiseDetails: {
            type: String,
            required: function () { return this.businessExperience.franchiseExperience; }
        },
    },
    currentBusinessStructure: {
        type: String,
        enum: ['Sole Proprietorship', 'Partnership', 'Corporation', 'LLC', 'Other'],
        required: true
    },
    annualRevenue: {
        type: String,
        enum: ['Less than $50,000', '$50,000 - $100,000', '$100,000 - $500,000', 'Over $500,000'],
        required: true
    },
    proposedLocation: {
        city: {
            type: String,
            required: true
        },
        locationType: [String],
        spaceRequirements: {
            type: Number,
            required: true
        },
        siteAvailability: {
            type: String,
            enum: ['Secured', 'Under Consideration', 'Open to Recommendations'],
            required: true
        },
        launchTimeline: {
            type: String,
            required: true
        }
    },
    financialDetails: {
        investment: {
            type: String,
            enum: ['Under $100,000', '$100,000 - $250,000', '$250,000 - $500,000', 'Over $500,000'],
            required: true
        },
        financingMethod: {
            type: String,
            required: true
        },
        operationalBudget: {
            type: Number,
            required: false
        },
        financialSupportRequired: {
            type: String,
            enum: ['Yes', 'No', 'Open to Discussion'],
            required: true
        },
        setupFeeAgreement: {
            type: Boolean,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Subsidiary', SubsidiarySchema);
