"use strict";

const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT;
const {
        getUsers,
        createUserController,
        deleteUserController,
        updateUserController
    }=require("./controllers/User.controller");
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/DemoUser', {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/get-users",getUsers);
app.post("/create-user",createUserController);
app.delete("/delete-user/:id",deleteUserController);
app.put("/update-user/:id",updateUserController);
// app.get("/seed-user",seedUserController);
app.listen(PORT,()=>{
    console.log(`listining to port ${PORT}`);
})