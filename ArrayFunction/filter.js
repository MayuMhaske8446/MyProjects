// Example 1
const ages = [13, 19, 25, 14, 36, 27, 40];

function isAdult(age){
    return age > 18;
}

console.log(ages.filter(isAdult));

// Example 2

let cities = [
    {name: "Los Angeles", population: 3792621},
    {name: "New York", population: 8175133},
    {name: "Chicago", population: 2695598},
    {name: "Houston", population: 2099451},
    {name: "Philadelphia", population: 1526006}
];

let bigCities = [];

for(let i = 0; i < cities.length; i++){
    if(cities[i].population > 3000000){
        bigCities.push(cities[i]);
    }
}

console.log(bigCities);

// Example 3: using thisArg value passed

function isInRange(value){
    if( typeof value !== "number"){
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

range = {
    lower: 1,
    upper: 10
}

let data = [10, 20, "30", 1, 5, "Javascript filter", undefined, "example"];

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange);