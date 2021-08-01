'use strict';

// name, age, color
// eat, sleep, walk
// function Cat(name, age, color){
//     this.name=name;
//     this.age=age;
//     this.color=color;

// }
// Cat.prototype.eat=function(){
//     console.log('cat is eating');
// }   

// Cat.prototype.sleep=function(){
//     console.log('cat is sleeping');
// }   



// class Cat{
//     constructor(name, age, color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }

//     sleep=()=>{
//         console.log('cat is sleeping');
//     }

//     eat=()=>{
//         console.log('cat is eating');
//     }

// }

// let juliano=new Cat('Juliano',2,'Gray');
// let frankie=new Cat('Frankie',3,'Orange');

// // juliano.name
// console.log(juliano);
// console.log(juliano.name);
// juliano.sleep();
// // console.log(frankie);
// // console.log(frankie.name);



class Animal{
    constructor(name, eyes, height,color){
        this.name=name;
        this.eyes=eyes;
        this.height=height;
        this.color=color;
    }
    
    walk(){
        let message='animal is walking';
        console.log(message);
    }
}

class Cat extends Animal {
    // for adding new property to the child only
    constructor(name, eyes, height,color, sound){
        super(name, eyes, height,color);
        this.sound=sound;
    }
    purr(){
        console.log('purrrrrrr');
    }
}

class Tiger extends Cat{
    constructor(name, eyes, height,color, sound, tribe){
        super(name, eyes, height,color, sound);
        this.tribe=tribe;
    }
}
class Dog extends Animal {
    // for adding new property to the child only
    constructor(name, eyes, height,color, chain){
        super(name, eyes, height,color);
        this.chain=chain;

    }
    bark(){
        console.log('woooooof');
    }
}


let newDog= new Dog('rex','blue',1,'white','gold');
let newCat= new Cat('mishmish','blue',45,'black','mewo');
let newTiger= new Tiger('sherokhan','blue eyes', '2m', 'orange and black','rawr','cool tribe');
console.log(newDog);
console.log(newCat);
console.log(newTiger);




