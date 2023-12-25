const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema({
    img1:{
        type: String
    },
    img2: {
        type: String
    },
    img3: {
        type: String
    },
    img4: {
        type: String
    },
    des: {
        type: String,
    },
    color: {
        type: Array,
    },
    size: {
        type: Array,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    }
})

const ProductDetailsModel = mongoose.model("productDetails", productDetailsSchema);
module.exports = ProductDetailsModel