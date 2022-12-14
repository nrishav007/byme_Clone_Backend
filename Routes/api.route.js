const express=require("express");
const API=express.Router();
const home1=require("../Resources/home1.json");
API.use(express.json());
API.get("/home",(req,res)=>{
    res.send(homejson);
});
API.get("/home/1",(req,res)=>{
    res.send(op)
});





module.exports=API;