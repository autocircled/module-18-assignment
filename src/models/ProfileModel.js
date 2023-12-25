const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    cus_add: {
        type: String,
    },
    cus_city: {
        type: String,
    },
    cus_country: {
        type: String,
    },
    cus_fax: {
        type: String,
    },
    cus_name: {
        type: String,
        required: true,
    },
    cus_phone: {
        type: String,
        required: true,
    },
    cus_postcode: {
        type: String,
    },
    cus_state: {
        type: String,
    },
    ship_add: {
        type: String,
    },
    ship_city: {
        type: String,
    },
    ship_country: {
        type: String,
    }, 
    ship_name: {
        type: String,
    }, 
    ship_phone: {
        type: String,
    }, 
    ship_postcode: {
        type: String,
    }, 
    ship_state: {
        type: String,
    }
})

const ProfileModel = mongoose.model("profile", profileSchema);
module.exports = ProfileModel;