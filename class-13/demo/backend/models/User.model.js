// Schema
// Model
/*
Database:
    Collections:User
        Documents:
            fields
*/
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:String,
    department:String,
    age:Number
})

const userModel=mongoose.model("user",userSchema);

// const userSeed=()=>{
//     const newUser=new userModel({
//         username:"John",
//         department:"Finance",
//         age:29
//     })
//     newUser.save()

//     console.log(newUser);
//     return newUser;
// }

module.exports={
    userModel
}