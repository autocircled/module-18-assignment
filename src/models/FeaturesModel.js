const mongoose = require("mongoose");

const featuresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    img: {
        type: String
    }
})

const FeaturesModel = mongoose.model("features", featuresSchema);
module.exports = FeaturesModel;