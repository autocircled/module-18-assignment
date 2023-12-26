const CartModel = require("../models/CartModel");

exports.CartService = async (req) => {
  try {
    
    let data = await CartModel.find({});
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", message: err.message };
  }
};