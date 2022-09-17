const person = {
    firstName : "Mayur",
    lastName :  "Mhaske",
    fullName: function (){
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

setTimeout(person.fullName, 3000); // My name is undefined undefined

let result = person.fullName.bind(person);

setTimeout(result, 2000); // Mayur Mhaske


// * This * //
// In an object method this refers to the object
// Alone, this refers to the global object
// In a function, this refers to global object
// In a function, in strict mode, this is undefined
// In an event, this refers to the element that recieves the event

const createX = {
    x : 42,
    getX : function (){
        return this.x;
    }
};

const unboundGetX = createX.getX;
console.log(unboundGetX());   // undefined

const boundGetX = unboundGetX.bind(createX);

console.log(boundGetX()); // 42 

// Example 2

function log(...args){
    // "use strict";

    console.log(this, ...args);
}

const boundLog = log.bind("this value", 1, 2, 3);
const boundLog2 = boundLog.bind("new this value", 3, 4, 5);

boundLog2(6, 7);

// Another example :

this.y = 9;

const valueY = {
    y : 81,
    getY : function(){
        return this.y;
    },
};

console.log(valueY.getY());
const myY = valueY.getY;
console.log(myY());

const boundgetY = myY.bind(valueY);
console.log(boundgetY());  

