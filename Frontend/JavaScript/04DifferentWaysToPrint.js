// 1) Direct value/expression
console.log("Shiva");   // Prints a direct string.
console.log(1 + 2);     // Prints the result of an expression.


// 2) Using a variable
let Uname = "Shiva";
console.log(Uname);     // Prints the value stored inside the variable.


// 3) Using multiple values and separating them by comma (,)
let uname = "Shiva";
let age = 20;
console.log("Name is", uname, "Age is", age);
// Prints multiple values in one line.


// 4) Using string concatenation (+)
// Works for joining strings.
// If one value is a string and the other is a number/boolean,
// JavaScript converts the number/boolean into a string.
console.log("Name: " + uname);


// 5) Using Template Literals (Backticks)
// Used to combine text and variables easily using ${}.
console.log(`Hi ${uname}, so you are ${age} years old.`);


// 6) Logging arrays
let arr = [10,20,30];
console.log(arr);       // Prints the entire array.


// 7) Logging objects
let user = { uname: "Shiva", age: 25 };
console.log(user);      // Prints the complete object.


// 8) Logging function return value
function add(a, b){
    return a + b;
}
console.log(add(10,20)); // Calls the function and prints the returned value.