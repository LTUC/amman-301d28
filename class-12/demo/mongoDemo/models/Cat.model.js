const mongoose=require("mongoose");

const catSchema= new mongoose.Schema({
    catName:String,
    color:String,
    catType:String
});

const Cat = mongoose.model('Cats', catSchema);


const seedCat=()=>{
    const newCat=new Cat({
       catName:"mishmish",
       color:"orange",
       catType:"Himalaya" 
    })

    newCat.save();
    console.log(newCat);
}

// module.exports=seedCat;

module.exports=Cat;