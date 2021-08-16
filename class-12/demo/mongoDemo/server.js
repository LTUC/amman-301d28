"use strict";
const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
app.use(cors());
require("dotenv").config();
const catController=require("./controllers/Cat.controller");

mongoose.connect('mongodb://localhost:27017/mongoDemo', {useNewUrlParser: true});

app.get('/',catController);
app.listen(8000,()=>{
    console.log("Listining to port 8000")
})