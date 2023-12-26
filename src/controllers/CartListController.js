const { CartService } = require("../services/CartListService");

exports.CartList = async (req , res)=>{
    let result =  await CartService(req);
    return res.status(200).json(result)
}

exports.CartDelete = async (req , res)=>{
    
}

exports.CartUpdate = async (req , res)=>{
    
}

exports.CartCreate = async (req , res)=>{
    
}