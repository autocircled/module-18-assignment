const mongoose = require("mongoose");

const invoiceProductSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    invoiceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "invoices",
        required: true,
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
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
    color: {
        type: String,
    },
    size: {
        type: String,
    }
})

const InvoiceProductModel = mongoose.model("invoiceProducts", invoiceProductSchema);
module.exports = InvoiceProductModel