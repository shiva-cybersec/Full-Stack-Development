// ***** Operators in JS *****

// 1) Arithmetic Operators
    // Ans: +  -  *  /  %  **

// 2) Assignment Operators
    // Ans: =  +=  -=  *=  /=  %=  **=

// 3) Comparison Operators
    // Ans: ==  !=  ===  !==  >  <  >=  <=

// 4) Logical Operators
    // Ans: &&  ||  !
    // Used to combine or reverse multiple conditions.
    // Returns true or false.

// 5) Ternary Operator
    // Ans: condition ? doThis : doThat;

// 6) Type Checking and Instance Checking
    // Ans: typeof variableName;                // Checks the datatype of a value.
    // Ans: variableName instanceof ClassName; // Checks whether an object belongs to a particular class. Returns true or false.


// 7) Spread / Rest Operator (learn in function)
    // Ans: ...
    // Spread = expands/copies values.
    // Rest = collects multiple values into one.


// 8) Nullish Coalescing Operator (learn later)
    // Ans: ??
    // Used to give a default value only when the value is null or undefined.


// 9) Optional Chaining Operator (learn later)
    // Ans: ?.
    // Safely accesses object properties.
    // Returns undefined instead of giving an error if the property doesn't exist.



// ***** Special Values *****

    // 1) 1/0 = Infinity
    // Because the value keeps growing without limit.

    // 2) 0/0 = NaN
    // Because there is no valid mathematical answer.

    // 3) Number("abc") = NaN
    // Because "abc" is not a valid number.

    // 4) undefined + 1 = NaN
    // Because undefined is not a numeric value.


// ***** Variable Hoisting in JS *******
    // Ans: Hoisting means JavaScript moves variable and function declarations
    // to the top of their scope before executing the code.

    // For var:
    // Variable declaration goes to the top,
    // but initialization stays at its original place.

    // Example:
    // console.log(a);  // undefined
    // var a = 23;

    // Internally JavaScript treats it like:
    // var a;
    // console.log(a);
    // a = 23;

    // We can access a var variable before declaring it,
    // but its value will be undefined.

    // Note:
    // let and const are also hoisted, but they cannot be accessed before declaration
    // because of the Temporal Dead Zone (TDZ).
    // Temporal Dead Zone (TDZ):
    // (TDZ) = menaing The area before declaring a let/const variable where we cannot use that variable.

