const personInfo = {
    fullName : function (){
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

const person = {
    firstName : "Mayur",
    lastName : "Mhaske"
}

personInfo.fullName.apply(person);

// Example 2

function newInfo(city, country){
    console.log(`My name is ${this.firstName} ${this.lastName}, and I live in ${city, country}.`);
}

newInfo.apply(person, ["Ahmednagar", "Maharashtra"]);

// Example 3

const array = ["a", "b"];

const elements = [1, 2, 3];

array.push.apply(array, elements);
console.info(array);