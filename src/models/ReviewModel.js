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
        type: String
    }, 
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

const ReviewModel = mongoose.model("reviews", reviewSchema);
module.exports = ReviewModel