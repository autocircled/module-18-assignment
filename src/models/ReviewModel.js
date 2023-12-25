const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
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
    des: {
        type: String,
        required: true,
    }, 
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}, {
    timestamps: true,
    versionKey: false
})

const ReviewModel = mongoose.model("reviews", reviewSchema);
module.exports = ReviewModel