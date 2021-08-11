'use strict';
const Language=require('../models/Data.model');

const languageController=(req,res)=>{
    const data=["css",'js','node js','react'];
    const filteredData=data.filter(item=>{
       return (item==='css'||
        item==='js')
    })
    res.send(filteredData);
}

const dataController=(req,res)=>{
    const data=[
        {
            name:'first item',
            id:1,
            description:"testing MVC"
        },
        {
            name:'second item',
            id:2,
            description:"testing MVC"
        },
        {
            name:'third item',
            id:3,
            description:"testing MVC"
        },
        {
            name:'forth item',
            id:4,
            description:"testing MVC"
        },
    ]
    const modeledData=data.map(item=>{
        let language=new Language(item);
        return language;
    })
    res.send(modeledData);
}
module.exports={languageController,dataController}