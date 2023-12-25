const mongoose = require("mongoose");

const productSliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    des: {
        type: String,
    },
    price: {
        type: Number,
    },
    img: {
        type: String
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    }
})

const ProductSliderModel = mongoose.model("productSlider", productSliderSchema);
module.exports = ProductSliderModel;