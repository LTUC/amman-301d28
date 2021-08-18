"use strict";
const {jwt, getKey}=require("../handlers/jwtHandler");
const {userModel}=require("../models/User.model");

const getUsers=(req,res)=>{
    const token=req.headers.authorization.split(' ')[1];
    console.log(token);
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send("auth failed");
        }else{
            userModel.find({},(err,data)=>{
                if (err){
                    res.send("error happend")
                }
                else{
                    res.json(data)
                }
            })
        }
        
    })
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
    const token=req.headers.authorization.split(' ')[1];
    console.log(token);
    let userId=req.params["id"];
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send("auth failed");
        }else{
            userModel.findByIdAndDelete({_id:userId},(err,data)=>{
                if (err){
                    res.send("error occured");
                }
                console.log(userId);
                res.send("user deleted");
            })
        }
    })
}

const updateUserController=(req,res)=>{
    //url params
    // 611b7fae4b77505ecdcd3ff0
    let userId=req.params.id;
    let userData=req.body
    console.log(userId);
    userModel.findOne({_id:userId},(err,user)=>{
        user.username=userData.username;
        user.department=userData.department;
        user.save();
        res.json(user);   
    })
}

module.exports={
    getUsers,
    createUserController,
    deleteUserController,
    updateUserController
}