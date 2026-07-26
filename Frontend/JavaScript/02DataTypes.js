// 1) Add comments
    // Ans: We use // to write comments in JavaScript.
    // Comments are ignored by JavaScript and are used to explain code.


// ***** DataTypes *****

    // Whatever value we store inside a variable, JavaScript automatically
    // detects its datatype.
    // We don't need to manually mention the datatype.
    // Therefore, JavaScript is a dynamically typed language.


// 2) Number
    // Used to store numeric values.
    // JavaScript does not have separate int and float datatypes.
    // Both whole numbers and decimal numbers are stored as Number.
    // so, even after we divide (/) this can give answer in decimal or non decimal both(unlike c++)
    // Example:
    // let a = 12.4; (float)
    // let b = 22; (integer)


// 3) String
    // Used to store text or characters inside quotes.
    // Example:
    // let name = "Shiva"; or 'shiva';


// 4) Boolean
    // Stores only two values: true or false.
    // Example:
    // let isLogin = true;


// 5) Null
    // Means intentionally storing an empty value.
    // We use it when we don't want to store any value for now.
    // It represents an empty or unknown value.
    // Example:
    // let a = null;


// 6) Array
    // Used when we need to store multiple values in a single variable.
    // It can store different types of data.
    // Example:
    // let arr = [1,2,"Shiva","Shyam",true,[],{},function(){}];


// 7) Object
    // Used to store multiple properties/details of something/someone.
    // Data is stored in key:value pairs.
    // Example:
    // let user = {name:"Shiva", age:27, email:"abc@gmail.com"};


// 8) Symbol
    // Used to create unique values.
    // Mostly used in advanced JavaScript and objects.
    // We will learn Symbol in detail while studying objects.


// 9) Undefined
    // A variable is created but no value is assigned to it.
    // JavaScript automatically gives undefined.
    // Example:
    // let a;
    // or
    // let b = undefined;


// 10) NaN (Not a Number)
    // Happens when we perform an operation that cannot produce a valid number.
    // Example:
    // Number("Shiva") gives NaN;


// 11) Infinity
    // Represents an infinite value.
    // Example:
    // 1/0 gives Infinity;


// 12) Primitive and Reference (Non-Primitive) Datatypes in JS


    // Primitive datatype:
    // Stores the actual value.
    // When copied, a new separate value is created.

    // Example:
    // let a = 23;
    // let b = a;

    // Here value 23 is copied into b.
    // Changing b will not affect a.


    // Reference datatype:
    // Stores the address/reference of the memory location.
    // When copied, the address is copied instead of the actual value.

    // Example:
    // let arr = [1,2,3,4];
    // let arr2 = arr;

    // Here arr2 stores the reference of arr.
    // Both arr and arr2 point to the same array.


    // If we change arr2, arr also changes.
    // Example:
    // arr2.pop();


// Reference (Non-Primitive) Datatypes:
// Array, Object, Function

// Primitive Datatypes:
// Number, String, Boolean, Null, Undefined, Symbol, BigInt