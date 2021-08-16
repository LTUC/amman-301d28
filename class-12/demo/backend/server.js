"use strict";
const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
require("dotenv").config();
const jwt=require("jsonwebtoken");
const jwksClient=require("jwks-rsa");
const PORT=process.env.PORT

const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  });

// this is a ready to use function
const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}
app.get('/',(req,res)=>{
    res.send('working well....')
});
app.get('/auth',(req,res)=>{
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send(user)
    })
});
// app.get('/auth',(req,res)=>{
//     const token=req.headers.authorization.split(' ')[1];
//     jwt.verify(token,getKey,{},(err,user)=>{
//         if (err){
//             res.send("error happend")
//         }
//         res.send(user)
//     })
//     console.log("hello world")
//     res.json({token:token})
// })

app.listen(PORT,()=>{
    console.log(`listining on port ${PORT} `);
})