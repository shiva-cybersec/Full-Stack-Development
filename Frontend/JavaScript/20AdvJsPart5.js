// Debouncing and throttling
// JSON.parse(), JSON.stringify()




// *******************************************************************
// 1) Debouncing
// *******************************************************************
// debouncing:
// Meaning:
// Set a pause timer for certain seconds and then only execute a work.
//
// While the work is continuously going on,
// the function does NOT execute.
//
// Only when the user pauses/stops the work
// for a certain amount of time,
// then the function executes.
//
// The pause time and the work
// can be set by yourself.



function debounce(fn,delay){
    let timer;

    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,delay)
    }
}



document.querySelector("#search")
.addEventListener("input", 
    debounce(function(){

        console.log("chala")
    },400)
)



// *******************************************************************
// throttle means:
//
// As long as the main work is going on,
// a minor work will occur after every particular amount of time.
//
// It does NOT wait for the main work to stop.
//
// It simply controls how often the function can run.
//
// When the main work stops,
// the function also stops because there are no more events.



function throttle(fn, delay){
    let last = 0;

    return function (){
        const now = Date.now()

        if(now - last >= delay){
            last = now
            fn()
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("fn run")
},500))



// *******************************************************************
// 2) JSON.stringify()
// *******************************************************************


// JSON.stringify():
//
// It is used to convert a JavaScript object
// into a JSON string.
//
// Object  →  String
//
// Why?
//
// We commonly use it when we want to:
// - store an object in localStorage
// - send an object to a server
// - convert object data into JSON format



// Syntax:
// JSON.stringify(object)
JSON.stringify({
    name:"shiva",
    age:25
})

// Result:
// '{"name":"shiva","age":25}'



// IMPORTANT:
// Before stringify:
//
// JavaScript Object
// {
//     name:"shiva",
//     age:25
// }
//
// After stringify:
//
// String
// '{"name":"shiva","age":25}'



// So:
// JSON.stringify()
// Object → JSON String



// *******************************************************************
// 3) JSON.parse()
// *******************************************************************
// JSON.parse():
//
// It is used to convert a JSON string
// back into a JavaScript object.
//
// JSON String  →  Object



// Syntax:
// JSON.parse(jsonString)
JSON.parse('{"name":"shiva","age":25}')



// Result
// {
//     name: "shiva",
//     age: 25
// }



// IMPORTANT:
// JSON.parse() needs a VALID JSON string.
//
// JSON uses double quotes for property names.


// WRONG:
// JSON.parse('{name:"shiva", age:25}')



// CORRECT:
JSON.parse('{"name":"shiva","age":25}')



// So:
// JSON.parse()
// JSON String → JavaScript Object



// *******************************************************************
// 4) Easy Memory Trick
// *******************************************************************


// JSON.stringify()
//
// Object
//   ↓
// String



// JSON.parse()
//
// String
//   ↓
// Object



// Remember:
// stringify = make it a string
// parse = take the string and understand/read it as an object



