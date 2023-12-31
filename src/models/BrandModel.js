const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    brandImg: {
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
})

const BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;