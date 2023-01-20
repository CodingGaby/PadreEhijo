const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        img: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        size: {
          type: String,
          default: "M",
        },
        color: {
          type: String,
          default: "Black",
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    postalCode: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
