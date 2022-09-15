let person = {
    firstName: "Mayur",
    lastName: "Mhaske",
    // fullName: function(){
    //     console.log(`${firstName} ${lastName}`);
    // }
}

// person.fullName(); // Mayur Mhaske

const personInfo = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName : "Amol",
    lastName: "Khaire"
}

let result = personInfo.fullName.call(person2);

console.log(result);

// Call() method by using srguments

const personName = {
    fullName : function(village, district){
        return this.firstName + " " + this.lastName + ", " + village + ", " + district;
    }
}

let result2 = personName.fullName.call(person, "Takali Kazi", "Ahmednagar");

console.log(result2);

// Example 2

function product(name, price){
    this.name = name;
    this.price = price;
}

class food {
    constructor(name, price) {
        product.call(this, name, price);
        this.category = "food";
    }
}

let good = new food("cheeze", 45).name;
console.log(new product("bread", 25).price);

console.log(good);

// Example 4

function greet(){
    const reply = [this.animal, "typically sleep between", this.sleepDuration].join(" ");
    console.log( reply);
}

const obj = {
    animal : "cats",
    sleepDuration : "12 to 16 hrs"
}

greet.call(obj);

// Example using global object property

var globProp = "Global";

function display(){
    console.log( `Global property value is ${this.globProp}`)
}

display.call();