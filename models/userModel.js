const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
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
      enum: ["paid", "unpaid"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
