// Example 1 

let numbers = [175, 50, 25];

function myFunction(total, num) {
    return total - num;
}

let result = numbers.reduce(myFunction);

console.log(result);

// Example 2

const values = [15.7, 2.5, 6.4, 1.3, 10.8];

console.log(values.reduce(function (total, num) {
    return total + Math.round(num);
}));


// Example 3

let anyNumbers = [1, 2, 3];

function getOrdinalSuffix(i){
    let j = i % 10, k = i % 100;
    if(j == 1 && k != 11) return i + "st";
    if(j == 2 && k != 12) return i + "nd";
    if(j == 2 && k != 13) return i + "rd";
    return i + "th";
}

let call = 1;
let sum = anyNumbers.reduce( function (previousValue, currentValue, currentIndex, array){
    let result = previousValue + currentValue;
    console.log(`${getOrdinalSuffix(call)} call`);
    console.table({previousValue, currentValue, currentIndex, result});
    return result;
}, 100);

console.log(`Result : ${sum}`);