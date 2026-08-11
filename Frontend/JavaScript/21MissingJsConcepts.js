// contents:
// 1) Destructuring of array and object
// 2) Import and export (default vs named)
// *****************************************************



// 1) DESTRUCTURING OF ARRAY AND OBJECT
// A) ARRAY

// 1) Normal assigning one array to another
// Both variables point to the SAME array.
// Changing one will affect the other.

let arr = [10, 30, 40, 50];
let arr2 = arr;
arr2[0] = 100;

console.log(arr);  // [100, 30, 40, 50]
console.log(arr2); // [100, 30, 40, 50]
// *****************************************************




// 2) Copying all elements into a NEW array
// We use the SPREAD operator.

let arr3 = [...arr];

// A NEW array is created.
// All elements of arr are copied into arr3.

arr3[0] = 500;

console.log(arr);  // [100, 30, 40, 50]
console.log(arr3); // [500, 30, 40, 50]


// SPREAD operator = ...
// It spreads / unpacks the values.

// Right side of =(assign equal operator) example:
let newArr = [...arr];
//             ^^^^^^
//             SPREAD

// Spread does NOT have to be at the last position.

let numbers = [1, 2];
let numbers2 = [0, ...numbers, 3];

console.log(numbers2); // [0, 1, 2, 3]
// *****************************************************



// 3) REST in array destructuring
// When ... is used on the LEFT side of =
// inside destructuring, it is REST.

let values = [10, 20, 30, 40];
let [...values2] = values;

console.log(values2); // [10, 20, 30, 40]

// Here ...values2 is REST.
// It collects the values into values2.

// IMPORTANT:
// ... on the RIGHT side -> SPREAD
// ... on the LEFT side in destructuring -> REST


// REST must be the LAST element.
let values3 = [10, 20, 30, 40];
let [first, ...remaining] = values3;

console.log(first);     // 10
console.log(remaining); // [20, 30, 40]
// *****************************************************




// 4) Array destructuring
// Array values are assigned according to POSITION / ORDER.

let numbers3 = [10, 30, 40, 50];
let [a, b, c, d] = numbers3;

console.log(a); // 10
console.log(b); // 30
console.log(c); // 40
console.log(d); // 50


// The variable name does not matter.
// POSITION matters.

let numbers4 = [10, 30, 40, 50];
let [x, y] = numbers4;

console.log(x); // 10
console.log(y); // 30
// *****************************************************






// B) OBJECT

// 1) Normal assigning one object to another
// Both variables point to the SAME object.

let obj = {
    username: "Shiva",
    age: 23,
    ph: false
};

let obj2 = obj;
obj2.age = 30;

console.log(obj.age);  // 30
console.log(obj2.age); // 30
// *****************************************************





// 2) Copying all key-value pairs into a NEW object
// We use the SPREAD operator.
let obj3 = {...obj};

// A NEW object is created{}
// All key-value pairs of obj are copied into obj3.

obj3.age = 40;

console.log(obj.age);  // 30
console.log(obj3.age); // 40


// SPREAD with object:
let newObj = {...obj};
// *****************************************************





// 3) REST in object destructuring
let user = {
    username: "Shiva",
    age: 23,
    ph: false
};
let {...user2} = user;

console.log(user2);

// ...user2 is REST.
// It collects the properties of user into a NEW object.
// *****************************************************





// 4) Object destructuring
// Object values are taken using KEY NAME.
// Position / order does NOT matter.

let user2 = {
    username: "Shiva",
    age: 23,
    ph: false
};

let {username} = user2;
console.log(username); // Shiva


// We can take any property directly.
let {age} = user2;
console.log(age); // 23


// We can take multiple properties.
let {username: name, age: userAge} = user2;

console.log(name);    // Shiva
console.log(userAge); // 23


// IMPORTANT:
// Object destructuring uses KEY NAME.
// Array destructuring uses POSITION.
// *****************************************************




// 5) Wrong key name
let user3 = {
    username: "Shiva",
    age: 23,
    ph: false
};

let {users} = user3;

console.log(users); // undefined

// "users" does not exist as a key inside user3 object
// Therefore JavaScript gives undefined.
// *****************************************************






// =====================================================
// 2) IMPORT AND EXPORT
// =====================================================

// To use import/export,
// JavaScript must work as a MODULE.

// In HTML use this script line:
// <script type="module" src="script.js"></script>
//
// type="module" gives the JavaScript file
// the power to use import and export.
// *****************************************************







// *****************************************************
// A) DEFAULT EXPORT
// *****************************************************
// One JS file can have ONLY ONE default export.
// Example: user.js

let userName = "Shiva";
export default userName;


// To import it in another JS file:
import userName from "./user.js";
console.log(userName);



// Default import does NOT require the same name.
// Example:
import anyname from "./user.js";
console.log(anyname);

// Both are valid:
// import userName from "./user.js";
// import name from "./user.js";
// *****************************************************







// *****************************************************
// B) NAMED EXPORT
// *****************************************************
// Named export allows us to export
// MULTIPLE values from one JS file.

export let username = "Shiva";
export let age = 23;
export function sayHello() {
    console.log("Hello");
}


// Importing named exports:
import {username, age, sayHello} from "./user.js";

console.log(username);
console.log(age);
sayHello();


// Named import requires curly braces. and elementname must be same that we had in export file
// Correct:
import {username} from "./user.js";


// Wrong:
// import username from "./user.js";
// That syntax is for DEFAULT export.


// =====================================================
// DEFAULT vs NAMED EXPORT
// =====================================================

// DEFAULT EXPORT:
// One default export per file.
// Export:
export default username;

// Import:
import username from "./user.js";
// Curly braces are NOT required.
// *****************************************************




// NAMED EXPORT:
// Multiple named exports are allowed.
// Export:
export let username = "Shiva";
export let age = 23;
export function sayHello() {}

// Import:
import {username, age, sayHello} from "./user.js";
// Curly braces ARE required.
// *****************************************************


