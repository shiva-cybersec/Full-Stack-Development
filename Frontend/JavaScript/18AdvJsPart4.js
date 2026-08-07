// 1) Introduction to Error Handling
// 2) Common Types of Errors in JavaScript - [Syntax Errors, Runtime Errors, Logical Errors]
// 3) Understanding the Error Object - [message, name, stack]
// 4) Handling Exceptions Using try-catch and try-catch-finally
// 5) How to Throw Errors in JavaScript
// 6) Error Handling in Asynchronous Code
// 7) API






// ******************************************************************
// 2) Common Types of Errors in JavaScript
// ******************************************************************
// a) Syntax Error:
// A syntax error occurs when you write invalid JavaScript code.
// JavaScript cannot understand the code because of incorrect syntax.

// Example:
// leht a = 12   // Should be 'let', not 'leht'
// a let = 12    // Invalid placement of keywords



// b) Runtime Error:
// A runtime error occurs while the program is running.
// The code syntax is correct, but an error happens during execution.

// Example:
function abcd(){
    let name = "shiva"
    console.log(name.age) // undefined (not an error)
}
abcd()

// A better runtime error example:
function demo(){
    let name = "shiva"
    console.log(name.age.length) // TypeError
}
demo()



// c) Logical Error:
// A logical error does not produce an error message.
// The program runs successfully but gives an incorrect result.

// Example:
function add(a,b){
    return a-b;
}
console.log(add(2,3))

// The function name suggests addition,
// but subtraction is performed instead.
// ******************************************************************



// ******************************************************************
// 3) Understanding the Error Object
// ******************************************************************
// When an error occurs, JavaScript creates an Error object.
// The catch parameter (commonly named err)
// receives this Error object.

// Important properties:

// err.message
// Contains the error message.

// err.name
// Contains the error type.

// err.stack
// Contains information about where the error occurred.

// We will see these inside try-catch.
// ******************************************************************







// ******************************************************************
// 4) Handling Exceptions Using try-catch and try-catch-finally
// ******************************************************************
// try-catch allows us to handle errors gracefully.
// Instead of stopping the entire program,
// we can catch the error and continue execution.



// message
try{
    let abc = 30
    console.log(abc.sum.age)
}
catch(err){
    console.log(err.message)
}



// name
try{
    let a = 23
    console.log(a.name.age)
}
catch(err){
    console.log(err.name)
}



// stack
try{
    let b = 44
    console.log(b.name.age)
}
catch(err){
    console.log(err.stack)
}



// try-catch-finally
// The finally block always runs,
// whether an error occurs or not.

// Common uses:
// - Closing files
// - Hiding loaders
// - Cleaning up resources

try{
    let ganu = 30
    console.log(ganu.age.hyro)
}
catch(err){
    console.log(err)
}
finally{
    console.log("runs anyhow")
}
// ******************************************************************





// ******************************************************************
// 5) How to Throw Errors in JavaScript
// ******************************************************************
// We can create and throw our own custom errors.

try{
    let a = 23
    console.log(a + sum)
}
catch(err){
    throw new Error(
        "We can't perform the addition because 'sum' is not defined."
    )
}
// ******************************************************************





// ******************************************************************
// 6) Error Handling in Asynchronous Code
// ******************************************************************
// Instead of throwing a custom error,
// we can handle it ourselves and display a custom message.

try{
    let a = 23
    console.log(a + sum)
}
catch(err){
    console.log(
        new Error(
            "We can't perform the addition because 'sum' is not defined."
        )
    )
}
// ******************************************************************
// API (Application Programming Interface)
// An API is a service that provides data or functionality.

// Endpoint: An endpoint is the URL used to access the API.
// Request: A request is sent to the API asking for data.
// Response: The API sends back the requested data.

fetch("https://api.github.com/users/octocat")
.then(res => res.json())
.then(data => console.log(data))


// API: GitHub API
// Endpoint: https://api.github.com/users/octocat
// Request: fetch("https://api.github.com/users/octocat")
// Response (GitHub sends something like this):

/*
{
  "login": "octocat",
  "id": 583231,
  "avatar_url": "https://...",
  "html_url": "https://github.com/octocat",
  "followers": 18000,
  "following": 9
}
*/

// .then(res => res.json())
// Converts the response into a JavaScript object notation

// .then(data => console.log(data))
// Prints the user data to the console.

