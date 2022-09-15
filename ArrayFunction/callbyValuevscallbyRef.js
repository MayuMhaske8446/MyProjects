// Call by Value

var a = 5;
var b;

b = a;
a = 3;

console.log(a);  // 3
console.log(b);  // 5

// Call by Reference

var c = { greeting : "Hello"}
var d;
 d = c;
 c.greeting = "Welcome to Call by Reference";

 console.log(c); // {greeting : "Welcome to Call by Reference"}
 console.log(d); // {greeting : "Welcome to Call by Reference"}

 // 