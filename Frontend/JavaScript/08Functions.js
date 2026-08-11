// Contents (Functions):
// 1) Understanding Functions and Why They're Widely Used
//      a) Parameters
//      b) Arguments
//      c) Rest Parameters
//      d) Hoisting
//      e) Variable Hoisting
//      f) Function Hoisting
//
// 2) Parameters
//      a) Required Parameters
//      b) Destructured Parameters
//      c) Rest Parameters
//      d) Default Parameters
//
// 3) Arguments
//      a) Positional Arguments
//      b) Spread Arguments
//
// 4) Classic Function
// 5) Nested Function
// 6) Immediately Invoked Function Expression (IIFE)
// 7) Arrow Function (Fat Arrow Function)
// 8) Anonymous Function
// 9) Higher Order Function
// 10) Callback Function
// 11) First Class Function
// 12) Pure Function
// 13) Impure Function
// 14) Scoping
//      a) Global Scope
//      b) Function Scope
// 15) Closures
// 16) Scoping Rule
// ******************************************************************************************









// ***** Functions *****
// Functions are reusable blocks of code.
// They do not run immediately.
// They only run when we call them.
// We can call the same function as many times as we want.
// We usually create one function to perform one specific task/work.
// Example: Eating = take plate → serve rice → take water → eat.
// Instead of writing all these steps again and again, we put them inside one function.
// *************************************************



// 1) Understanding Functions and why they're widely used
// Topics:
// ['parameters', 'arguments', 'rest parameters', 'hoisting', 'variable hoisting', 'function hoisting']


// Example: Parameters and Arguments

function testingone(){ // no parameters
    // arguments object stores all values passed while calling the function.
    console.log(arguments, arguments[0]);
}
testingone("Shiva", 25, "abc@gmail.com"); // arguments
// *************************************************



// Example: Rest Parameter (...name)
// ...name means collect all remaining arguments and store them inside an array.

function testingtwo(a,b,...c){ // store remaining arguments inside array named c
    console.log(a,b,c);
}
testingtwo("hero",25,"abc@gmail.com","sanita","anita","katrina");
// *************************************************



// Example: Hoisting, Variable Hoisting, Function Hoisting

// Hoisting means JavaScript moves declarations to the top before execution.
// Because of this, some variables/functions can sometimes be used before they are written.

// Variable Hoisting:
// Only var is hoisted with value undefined.
// let and const are also hoisted but remain inside the TDZ (Temporal Dead Zone),
// so accessing them before declaration gives an error.

// console.log(a,b,c); // undefined, ReferenceError, ReferenceError

// var a = 20;
// let b = 30;
// const c = 40;
// *************************************************



// Function Hoisting
// Normal function declarations can be called before they are written.

// hoist(); 
function hoist(){
    console.log("Function hoisting happened.");
}
// *************************************************



// Function Expression Hoisting
// Only the variable is moved to the top and its value becomes undefined.
// The function is NOT moved, so calling it before assignment gives an error.

// console.log(hoister); // undefined
// hoister(); // TypeError

var hoister = function(){
    console.log("Hey");
}
// *************************************************
// NOTE: 
    // Normal function → whole function is hoisted.
    // Function expression → only variable is hoisted, function is not.
// *************************************************




// 2) Parameters
// Topics:
// ['required', 'destructured', 'rest', 'default']

// Example: Required Parameters
// If we create 3 parameters but pass only 1 argument,
// the remaining parameters become undefined (not an error).

function testingthree(a,b,c){
    console.log(a,b,c);
}
testingthree("Sachin",25,"Badar");
// *************************************************



// Example: Destructured Parameters
// Destructuring lets us directly access object properties individually.

function testingfour({name,age}){
    console.log(name,age);
}
testingfour({
    name:"Shiva",
    age:25
});
// *************************************************



// Example: Rest + Default Parameter
// Default value is used if no argument is passed.
// Rest parameter stores all remaining arguments inside an array.

function testingfive(name="Ankit",...me){
    console.log(name,me);
}

testingfive(23,24,2,34,234,234,234,234,234,232,11);
// *************************************************





// 3) Arguments
// Topics:
// ['positional','spread']

// Example: Positional Arguments
// Arguments are assigned to parameters according to their positions respectively.

function testingsix(a,b,c,d){
    console.log(arguments);
}
testingsix(2,4,3,1);
// *************************************************



// Example: Spread Operator (...)
// Spread sends every array element as separate arguments.

function testingseven(a,b,c,d,e){
    console.log(a,b,c,d,e);
}

let arr = [23,44,1,"Sagar","Shiva"];
testingseven(...arr);
// *************************************************






// 4) Classic Function, Nested Function

// Example: Classic Function
// Normal function created using the function keyword.

function testingeight(){
    console.log("Classic Function");
}
testingeight();
// *************************************************



// Example: Nested Function
// Function created inside another function.

function one(){

    function two(){
        console.log("Two run");

        function three(){
            console.log("Three run");
        }
        three();
    }
    two();
}
one();
// *************************************************






// 5) IIFE (Immediately Invoked Function Expression)
// Anonymous function written inside () and called immediately using ().
// Syntax: (function(){ })();
// Used when we want the function to run immediately and create a private scope.

(function(){
    let balance = 5000;
    console.log(balance);
})();
// *************************************************





// 6) Arrow Function (official name)
// Fat Arrow Function (nickname)
// Both are exactly the same thing.

// Example: Arrow/Fat Arrow Function

let fatarrow = ()=>{
    console.log("Fat Arrow Function");
};
fatarrow();
// *************************************************




// Example: Anonymous Function
// Function without a name.
// Usually stored inside a variable.

let anonymous = function(){
    console.log("Anonymous Function");
};
anonymous();
// *************************************************




// Example: Higher Order Function
// A Higher Order Function either:
// 1) accepts another function as a parameter
// OR
// 2) returns another function.


// Returning another function
function testingnine(){ // 1) Runs first.
    return function mini(){ // 2) Returns mini().
        console.log("Mini Function"); // 4) Runs when mini() is called.
    };
}

let result = testingnine(); // 3) Store returned function.
result(); // 4) Call mini().
// +++++++++++++++++++++++++++++++++++++++++++++++++


// Accepting another function
function testingnine2(secondfn){ // 2) Runs first.
    console.log("Another function received."); // 3) Prints first.
    secondfn(); // 4) Calls callback.
}
testingnine2(function mini(){ // 1) Passed as callback.
    console.log("Wow, I am passed as an argument."); // 5) Prints second.
});
// *************************************************




// Example: Callback Function
// Callback = Function passed as an argument to another function.

function testingnine3(callback){
    console.log("Inside Higher Order Function");
    callback();
}

testingnine3(function(){
    console.log("I am Callback Function");
});
// *************************************************





// Example: First Class Function
// JavaScript treats functions like normal values.
// Functions can be:
// 1) Stored in variables.
// 2) Passed as arguments.
// 3) Returned from another function.

let testing10 = function testingten(){
    console.log("Stored inside variable.");
};
console.log(testing10);



// Passing function as argument
function testingten2(a,b){
    console.log(a,b);
}
testingten2(23,function(){
    console.log("LOL");
});
// *************************************************


// 7) Pure Function
// However many times we call a function with the same inputs,
// it always gives the same output.
// It does not change any outside variables/data.
// Meaning it does not affect anything outside this function.

// Example:
// Like a way to go home, and there are trees/leaves on the way.
// The trees and leaves have nothing to do with your path/function.

let a = 20;
function add(a,b){
    return a+b;
}
console.log(add(10,20));
console.log(add(10,20));
// Both outputs will always be 30.
// *************************************************



// 8) Impure Function
// A function that can give different outputs for the same input
// or changes outside variables/data.
// It depends on external factors like random values, global variables, etc.

let a = 0;
function testingeleven(val){
    a = Math.random()+2; // changes outside variable every time

    return a;
}
console.log(testingeleven(100));
console.log(testingeleven(100));
// Both outputs can be different.
// *************************************************



// 9) Scoping ['global', 'function scope']
// Global Scope:
// Any variable created outside a function/block.
// It can be accessed from anywhere in the code.

let a = 30;

// Function Scope:
// Any variable created inside a function.
// It can only be accessed inside that function.
// It cannot be accessed outside.

function testingtwelve(){
    let b = 40;
    console.log(b);
}

// console.log(b); // Error because b is inside function scope
// *************************************************



// 10) Closures
// Closure means when a function returns another function,
// and that returned function can still use the variable of its parent function
// even after the parent function has finished running.

// It is not just returning a function (Higher Order Function does that too).
// The extra thing closure does:
// the returned function keeps access to the parent function's variable.

function testingthirteen(){
    let a = 25; // parent variable

    return function mini(){
        console.log(a); // returned function is using parent variable
    }
}

let result = testingthirteen();
result();


// Therefore, a closure is also a Higher Order Function
// because it returns another function,
// but every Higher Order Function is not a closure.
// Closure specifically requires using the parent function's variable.
// *************************************************



// 11) Scoping rule
// JavaScript first checks the current scope for a variable,
// if not found then it looks in the parent/outer scope.

let a = 10; // 1) Global variable created first.
function one(){ // 2) Function one is created.

    let b = 20; // 4) Runs when one() is called.
    function two(){ // 5) Function two is created.

        console.log(a); // 7) Searches: two() → one() → global scope and finds a = 10.
    }
    two(); // 6) Calls two().
}
one(); // 3) Calls one().


// Output:
// 10
// *************************************************
