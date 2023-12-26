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
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

const ProductDetailsModel = mongoose.model("productdetails", productDetailsSchema);
module.exports = ProductDetailsModel