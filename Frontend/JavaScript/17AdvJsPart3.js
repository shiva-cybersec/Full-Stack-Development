// Contents:
// 1) Introduction to Asynchrony in JavaScript
// 2) JavaScript Single-Threaded Nature
// 3) Synchronous JavaScript
// 4) Blocking in JavaScript
// 5) Asynchronous Programming
// 6) Understanding Asynchrony
// 7) Introduction to Callbacks
// 8) Callback Function Example
// 9) How Callbacks Work
// 10) Real-Life Callback Example
// 11) Multiple Dependent Asynchronous Tasks
// 12) Callback Hell
// 13) Pyramid of Doom
// 14) Problems with Callback Hell
// 15) Introduction to Promises
// 16) Promise States — Pending, Fulfilled and Rejected
// 17) Using .then()
// 18) Using .catch()
// 19) Introduction to async and await
// 20) async Function
// 21) await Keyword
// 22) How async and await Work
// 23) fetch()
// 24) fetch() Response Object
// 25) .json() Method
// 26) Using fetch() with .then() and .catch()
// ******************************************************************************************




// 1) Introduction to Asynchrony In Javascript
// 2) Introduction to 'callbacks' and Problems in Callbacks
// 3) Understanding 'promises' , 'pending', 'resolved', 'rejected'
// 4) How to prevent callback hell using 'async' & 'await'
// 5) 'setInterval' & 'setTimeout' in Javascript
// *******************************************************************



// 1) Introduction to Asynchrony in JavaScript

// JavaScript is a single-threaded language.
// It means JavaScript can execute only one task at a time.

// By default, JavaScript works synchronously.
// It executes code one by one in the order it is written.

// Problem:
// If one task takes a long time (like getting data from a server),
// JavaScript waits until that task finishes.
// During that time, the remaining tasks cannot run.
// This is called blocking.

// To solve this problem, JavaScript uses asynchronous programming.

// Asynchronous means:
// If a task takes a long time, JavaScript starts that task
// and continues executing the remaining tasks.
// When the long task finishes, JavaScript executes its result later.

// This keeps the program fast, responsive, and prevents blocking.

// Asynchrony:
// It means letting a time-taking task run in the background
// while JavaScript continues executing other tasks.
// When the background task is finished, its result is handled later.
// *******************************************************************







// *******************************************************************
// 2) Introduction to 'callbacks' and Problems in Callbacks
// *******************************************************************
// callback:
// A callback is a function that is passed as an argument to another function.
// It is not executed immediately.
// It runs later when a specific task is completed.



// Example:
function getData(callback){

    console.log("Fetching data...")
    setTimeout(function(){
        console.log("Data received")
        callback()
    },2000)
}

getData(function(){
    console.log("Now we can use the data")
})



// Output:

// Fetching data...
// (after 2 seconds)
// Data received
// Now we can use the data




// How it works:
// 1) getData function starts running.
// 2) It receives another function as callback.
// 3) setTimeout starts a timer.
// 4) JavaScript does not wait.
//    It continues other work.
// 5) After 2 seconds, callback function runs.



// Real life example:
// Imagine:

// You order food.

// Restaurant says:
// "Wait 20 minutes, your food is cooking."

// You don't stand inside the kitchen.
// You do other work.

// When food is ready:
// Restaurant calls you.

// That call is a callback.




function getuserid(time, cb){
    console.log("fetching userid...")
    setTimeout(function(){
        cb({id:2, isValidUser:true})

    },time)

}

function getpassword(id, cb){
    console.log("fetching username...")
    setTimeout(function(){
        cb({username:"shiva", surname:"pandey"})

    },2000)

}

function getpost(username, cb){
    console.log("fetching post...")
    setTimeout(function(){
        cb({
            status:function(){
                console.log("got the post")
            }
        })
    },1000)

}

getuserid(2000, function(data){
    getpassword(data.id, function(id){
        getpost(id.username, function(finaldetail){

            console.log("got it")
            finaldetail.status()

        })
    })
})



// *******************************************************************
// Callback Problem
// *******************************************************************


// Problem starts when we have multiple dependent asynchronous tasks.
// Example:

// First:
// Get user information.

// Second:
// Using user information, get user orders.

// Third:
// Using orders, get payment details.



// We write:
getUser(function(user){
    getOrders(user.id,function(orders){
        getPayment(orders.id,function(payment){

            console.log(payment)
        })
    })
})



// This becomes difficult to read.

// This is called:
// Callback Hell
// or
// Pyramid of Doom



// Callback Hell problems:

// 1) Code becomes difficult to understand.
// 2) Debugging becomes difficult.
// 3) Error handling becomes difficult.
// 4) Code becomes deeply nested.




// To solve callback hell:
// We use Promises.

// Promise:
// A Promise is an object that represents the eventual result of an asynchronous operation.
// For example, it can be used to get data from a server.

// A Promise has three different states:
// Pending  : The operation is still in progress.
// Fulfilled: The operation completed successfully and returned data.
// Rejected : The operation failed and returned an error.



// *******************************************************************
// Using .then() and .catch()
// .then() runs when the Promise is fulfilled.
// .catch() runs when the Promise is rejected.
// *******************************************************************

promise.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})



// *******************************************************************
// 4) async and await
// await must be used inside an async function.
// await waits for a Promise to complete before moving to the next line.
// It makes asynchronous code easier to read and write.
// *******************************************************************

// await:
// await waits for a Promise to resolve or reject.
// It can only be used inside an async function.



// Working:
// getData() returns a Promise.
// await waits until the Promise is resolved.

// After completion:
// next line executes.
// *******************************************************************






// fetch() is used to send a request to a URL and receive data.
// The response returned by fetch() is not the actual data.
// It is a Response object.
// .json() converts the response body into a JavaScript object.
// Usually we use two .then() methods:
// First .then() converts the response into JSON.
// Second .then() works with the actual data.

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(actualdata => console.log(actualdata.results[0].phone))
.catch(err => console.log(err))