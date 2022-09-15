// Example using bind method

let multiply = function (x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);

let multiplyByThree = multiply.bind(this, 3);

multiplyByTwo(5);
multiplyByThree(5);

// Example using closure method 

let product = function (x){
    return function(y){
        console.log(x * y);
    }
}

let multiplyBy10 = product(10);

multiplyBy10(5);

// Example 3 

function addition(a, b, c){
    return  a + b + c;
}

console.log(addition(2, 4, 6)); // 12

function addition1 (a){
    return function (b){
        return function (c){
            return a + b + c ; 
        }
    }
}

// traditinal way 
let sum = addition1(2);
console.log(sum); 

// f(b){
//     return function (c){
//         return a + b + c;
//     }
// }
let sum1 = sum(4);
console.log(sum1);

// f(c){
//     return a + b + c ;
// }

let sum2 = sum1(6);
console.log(sum2);

// 12

// here is currying in work actually

let result = addition1(2)(4)(6);
console.log(result);

// 12

// realLife Example

userObj = {
    name: "Mayur",
    age : 27
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}

let user = userInfo(userObj);
console.log(user("name"));
console.log(user('age'));

console.log(userInfo(userObj)("name"));