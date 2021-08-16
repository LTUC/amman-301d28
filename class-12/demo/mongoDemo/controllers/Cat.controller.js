const CatModel=require("../models/Cat.model");

const catController=(req,res)=>{
    const newCat=new CatModel({
        catName:"Juliano",
        color:"Grey",
        catType:"chenchilla"
    })
    newCat.save();
    res.send(newCat);
}


module.exports=catController