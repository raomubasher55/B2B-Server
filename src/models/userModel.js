const mongoose = require("mongoose");
const crypto  = require('crypto');

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false, //for google only
    },
    level: {
      type: String,
      enum: [" E-Commerce", "Consignment"],
    },
    score: {
      type: Number,
    },
    package: {
      type: String,
      enum: ["Starter", "Growth", "Premium"],
    },
    paymentStatus: {
      type: String,
      default: "unpaid",
      enum: ["paid", "unpaid"],
    },
    isVerified:{
      type:Number,
      enum : [0,1],
      default: 0
    },
    emailVerificationToken:{
      type:String,
    },
    passwordResetToken: String,
    passwordResetExpires: Date
  },
  { timestamps: true }
);


userSchema.methods.generateVerificationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  return token; 
};

userSchema.methods.generatePasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
