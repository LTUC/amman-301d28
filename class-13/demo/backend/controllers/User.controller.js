"use strict";
const {userModel}=require("../models/User.model");

const getUsers=(req,res)=>{
    userModel.find({},(err,data)=>{
        if (err){
            res.send("error happend")
        }
        else{
            res.json(data)
        }
    });
}

const createUserController= (req,res)=>{
    let data={
        username:req.body["username"],
        department:req.body["department"],
        age:req.body["age"]
    }
    let newUser= new userModel(data);
    newUser.save().then(    
        res.json({message:"user created succefully",user:newUser})
    )
}

const deleteUserController=(req,res)=>{
    let userId=req.params["id"];
    userModel.findByIdAndDelete({_id:userId},(err,data)=>{
        if (err){
            res.send("error occured");
        }
        console.log(userId);
        res.send("user deleted");
    })
}
module.exports={
    getUsers,
    createUserController,
    deleteUserController
}