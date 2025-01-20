const mongoose = require('mongoose');
const asyncHandler = require('../utils/asyncHandler');

const connectDB = asyncHandler(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB is Connected');
});
module.exports = connectDB;