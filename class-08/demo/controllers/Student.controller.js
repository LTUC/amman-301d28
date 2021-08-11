'use strict';
const Student=require('../models/Student.model');

const studentController=(req,res)=>{
    const studentsList=[
        {
            name:'John',
            id:1,
            description:"testing MVC"
        },
        {
            name:'Jane',
            id:2,
            description:"testing MVC"
        },
        {
            name:'Ahmad',
            id:3,
            description:"testing MVC"
        },
        {
            name:'Razan',
            id:4,
            description:"testing MVC"
        },
    ]
    const objectsList=studentsList.map(item=>{
        let studentObject=new Student(item);
        return studentObject;
    })
    res.send(objectsList)
}

module.exports=studentController;