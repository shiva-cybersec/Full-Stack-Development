// Contents:
// 1) Conditions in JavaScript
// 2) Truthy and Falsy Values
// 3) if-else
// 4) if-else if-else
// 5) Ternary Operator
// 6) Switch Statement
// ******************************************************************************************



// ***** Conditions in JS **** 
// like security guard checking your id before letting you inside

// 0) Truthy and falsy (were made so developers are limited from entering random things in place of condition)
    // Ans: 
    // 0 "" false NaN null undefined document.all = are all falsy values
    // rest are all truthy values

// 1) if-else
    // Ans:
    // if(false) console.log("then do this");
    // else console.log("or do this");

// 2) if-else if-else
    // Ans:
    // if(false) console.log("either do this");
    // else if(false) console.log("or do this");
    // else console.log("or do this ");

// 3) Ternary operator: condition? true:false;
    // Ans: 25>78 ? console.log("Yes"): console.log("NO");
    
// 4) Switch
    Ans: 
    let a = 2;
    //switch(expression[2+3], statement[a=2+3], or more like)
    switch(a){ 
        case 1: console.log("Monday");
        break;
        case 2: console.log("Tuesday");
        break;
        case 3: console.log("Wednesday");
        break;
        default: console.log("Invalid input");
    }
