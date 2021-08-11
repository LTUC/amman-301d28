"use strict";
const express=require("express");
const cors=require('cors');
const app=express();
app.use(cors());
require('dotenv').config();
const PORT=process.env.PORT;

const studentController=require('./controllers/Student.controller');
const {languageController,dataController}=require('./controllers/Language.controller');

app.get('/',(req,res)=>{
    res.send("Working...")
});
app.get('/first',languageController);

app.get('/second',dataController);

app.get('/students',studentController);

app.get('/greetings',(req,res)=>{
    let name=req.query['name'];
    let message=`Hello ${name}`;
    res.send(message)
});

app.listen(PORT,()=>{
   console.log(`listening on ${PORT}`)
});


