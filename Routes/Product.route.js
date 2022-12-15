const express=require("express");
const ProductModel = require("../Models/Product.model");
const product=express.Router();
product.use(express.json());

product.get("/",async(req,res)=>{
    res.send(await ProductModel.find());
});

product.get("/:type",async(req,res)=>{
    const types=req.params.type;
    res.send(await ProductModel.find({type:types}));
});

module.exports=product;