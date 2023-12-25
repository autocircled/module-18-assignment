const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    size: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

const CartModel = mongoose.model("carts", cartSchema);
module.exports = CartModel;