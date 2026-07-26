// ****** Loops *******
// Loop means repeating something again and again.

// Two types of use cases:

    // a) Static loop:
        // Print or do the same thing again and again.
        // Value does not change, same output every time.

        // Example:
        // for(let i = 1; i<5; i++){
        //     console.log("Hi");
        // }


    // b) Dynamic loop:
        // Print or do something again and again,
        // but the value/output changes in every loop.

        // Example:
        // for(let i = 1; i<=5; i++){
        //     console.log(i);
        // }


// 1) for loop
    // Ans: Used when we know how many times we want to run the loop.
    // It has three parts:
    // initialization → condition → increment/decrement

    // Example:
    // for(let i = 1; i<10; i++){
    //     console.log("Hi");
    // }


// 2) while loop
    // Ans: Used when we don't know exactly how many times the loop will run.
    // It runs until the condition becomes false.

    // Example:
    // let i = 0;
    // while(i<10){
    //     console.log("Hello");
    //     i++;
    // }


// 3) do...while loop
    // Ans: Similar to while loop but it runs at least one time
    // even if the condition is false because condition is checked after execution.

    // Example:
    // let i = 0;
    // do{
    //     console.log("Wow");
    //     i++;
    // }while(i<10);



// 4) forEach()
// Mainly used with arrays.
// Used to loop through arrays.
// It takes each element one by one
// and gives it to the callback function parameter.
// You can perform any operation on each value.

let arr = [1,2,34,5,6];
arr.forEach(function(val){
    console.log(val);
});




// 5) for...in loop
// Mainly used with objects.
// Used to loop through object keys/properties.
// It gives the key name one by one.

// Syntax:
// for(let variableName in objectName){
//     code
// }

let person = {
    name: "Shiva",
    age: 25,
    ph_no: 9183849184
};

for(let key in person){
    console.log(key);          // gives keys
    console.log(person[key]);  // gives values
}




// 6) for of loop
    // Ans: Used to loop through iterable values like arrays and strings.
    // Will learn after arrays.


// 7) Recursion
    // Ans: When a function calls itself again and again until a condition stops it.


// 8) Loop control statements
    // break = stops the loop completely.
    // continue = skips current loop and moves to next iteration.





// ***** Convert string to number *****

// 1) parseInt()
    // Converts string into integer number.
    // Example:
    // parseInt("123") = 123


// 2) Number()
    // Converts string into number (integer or decimal).
    // Example:
    // Number("12.5") = 12.5


// 3) Unary +
    // Short way to convert string into number.
    // Example:
    // +"123" = 123





// ***** Validate proper input code *****

// Example:

let age = prompt("Enter your age: ");

if(age === null || age.trim()==="" || isNaN(age))
    console.error("Enter a valid number");

else{
    age = Number(age);

    if(age<=0)
        console.log("Age can't be 0 or negative");

    else if(age>=18)
        console.log("Able to vote");

    else
        console.log("Not eligible for voting");
}