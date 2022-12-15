const express=require("express");
const API=express.Router();
const fs=require("fs");
API.use(express.json());

API.get("/:pat/:id",(req,res)=>{
    const ids=req.params.id;
    const pat=req.params.pat;
    const data=JSON.parse(fs.readFileSync(`./Resources/${pat}.json`,"utf-8"));
    if(data[ids]==undefined){
        res.status(404).send({msg:"page not found"});
    }
    else{
        res.send(data[ids]);
    }
});



module.exports=API;