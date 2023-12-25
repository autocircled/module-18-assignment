const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    shortDes: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    discountPrice: {
        type: Number,
    },
    image: {
        type: String
    },
    star: {
        type: Number
    },
    stock: {
        type: Number,
        required: true
    },
    remark: {
        type: String
    },
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true,
    },
    brandID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands",
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;