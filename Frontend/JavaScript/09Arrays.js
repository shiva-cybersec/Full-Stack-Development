// ****** Array ******

// 1) What are arrays and how to create an array?
// Array is used to store multiple values at once.
// It can store same data type or different data type values.

// Syntax: We can create array in two ways.

// 1st way
let arr1 = [23,44,"shiva",true,NaN,function(){let a = 40},{name:"sagar",age:23}];

// 2nd way
let arrAnother = new Array();
// *************************************************


// 2) How to access elements in array
let arr2 = [23,44,"shiva",true,NaN,function(){let a = 40},{name:"sagar",age:23}];

// Using:
// arrayName[indexNumber]

console.log(arr2[0]);
// *************************************************


// 3) In-built functions of arrays
// [push, pop, shift, unshift, indexOf, array destructuring,
// filter, some, map, reduce, every, spread operator,
// slice, reverse, sort, join, toString]

let arr3 = [23,44,"shiva",true,NaN,function(){let a = 40},{name:"sagar",age:23}];

arr3.push(100);      // add element at end
arr3.pop();          // remove last element
arr3.unshift(200);   // add element at beginning
arr3.shift();        // remove first element
arr3.reverse();      // reverse array
// arr3.sort();      // mainly used for number/string arrays
console.log(arr3.indexOf(23)); // find index of value
// *************************************************


// Spread Operator
// Copies all elements of one array into another array.

let arr4 = [...arr3];
console.log(arr4);
// *************************************************




// Array Destructuring
// Means taking values from an array and storing only the values we want
// into separate variables.
// [] variable positions match the array index positions.
// If you don't want a value, leave it empty using comma (,).

// Syntax:
// let [variables] = arrayNametocopyfrom;

let arr = [10,20,30,40];
let [a,,,b] = arr;

// How it works:
// a gets arr[0] → 10
// , skips arr[1] → 20
// , skips arr[2] → 30
// b gets arr[3] → 40

// Internally it is like:
// let a = arr[0];
// let b = arr[3];

console.log(a); // 10
console.log(b); // 40
// *************************************************


// filter()
// Takes each element from array one by one
// and gives it to the callback function parameter.
// Checks the condition.
// true  -> keeps the value.
// false -> removes the value.
// Returns a new filtered array.

let arrNew = arr3.filter(function(val){
    return val < 3;
});
console.log(arrNew);
// *************************************************




// map()
// Takes each element from array one by one
// and gives it to the callback function parameter.
// Performs an operation on every element.
// Stores every returned value into a new array.
// Returns a new array of same length.

let arr5 = [1,2,3,4];
let newArr = arr5.map(function(val){
    return val * 2;
});

console.log(newArr);
// *************************************************




// some()
// Takes each element from array one by one
// and gives it to the callback function parameter.
// Checks the condition.
// If any one element becomes true,
// it immediately stops and returns true.
// Otherwise returns false.

let arr6 = [1,2,3,4];
let result = arr6.some(function(val){
    return val > 3;
});

console.log(result);
// *************************************************



// every()
// Takes each element from array one by one
// and gives it to the callback function parameter.
// Checks the condition.
// If ALL elements become true,
// it returns true.
// If even one element becomes false,
// it immediately stops and returns false.
// every() = "Does every value match my condition?"

let arr7 = [1,2,3,4];
let result = arr7.every(function(val){
    return val > 0;

});
console.log(result);


// Working:
// val = 1 → 1 > 0 ✅
// val = 2 → 2 > 0 ✅
// val = 3 → 3 > 0 ✅
// val = 4 → 4 > 0 ✅

// All values are true,
// so it returns true.

// Output:
// true
// *************************************************



//  DIFFERENCE BETWEEN SOME AND EVERY
// some()
// Checks each element and returns true if at least one element passes the condition.
// Stops immediately when it finds the first true value.


// every()
// Checks each element and returns true only if all elements pass the condition.
// Stops immediately when it finds the first false value.
// *************************************************






// reduce()
// Takes each element from array one by one
// and gives it to the callback function.
// Combines all elements into one final value.
// acc stores previous result.
// val stores current element.

let total = arr6.reduce(function(acc,val){
    return acc + val;
},0);

console.log(total);
// *************************************************


// slice()
// Takes a part of an array and returns it as a new array
// Original array does not change

// Syntax:
// arrayName.slice(startIndex, endIndex)
// endIndex is not included

let arrr = [1,2,4,5,6,2,3,4]
let newArrr = arrr.slice(2,5)
console.log(newArrr); // [4,5,6]
// *************************************************



// join()
// Joins all array elements into one string
// We can choose what must come between the values/elements

// Syntax:
// arrayName.join("separator(eg),- etc")

let arrrr = [1,23,45,6,"shiva","Pradhan","ankur"]
let newArrrr = arrrr.join("-");
console.log(newArrrr); 

// output: 1-23-45-6-shiva-Pradhan-ankur
// *************************************************


// toString()
// Converts the whole array into one string.
// Elements are separated by commas automatically

let aru = [23,44,"Shiva","boy","25years"]
let newAru = aru.toString()
console.log(newAru)
// *************************************************




// 4) Iterating over array using [for loop, forEach]
let arr7 = [23,44,"shiva",true,NaN,function(){let a = 40},{name:"sagar",age:23}];

// Using for loop
for(let i = 0; i < arr7.length; i++){
    console.log(arr7[i]);
}


// Using forEach()
// Takes each element one by one
// and gives it to the callback function parameter.
// We can perform any operation on every element.

arr7.forEach(function(val){
    console.log(val);
});
// *************************************************



// 5) What are Objects in JS?
// Object is used to store details of one person or one thing.
// Data is stored as key : value pairs.
// We can create objects in two ways.

// 1st way
let student1 = {
    school:"GSSS",
    name:"Shiva",
    age:25,
    ph_no:2938492834,
    gmail:"abc@gmail.com"
};


// 2nd way
let studentNew = new Object();
// *************************************************




// 6) Creating objects, accessing properties,
// deleting properties and nested objects

let student2 = {
    school:"GSSS",
    name:"Shiva",
    age:25,
    ph_no:2938492834,
    gmail:"abc@gmail.com"
};

// Access property (dot notation)
console.log(student2.ph_no);

// Access property (bracket notation)
console.log(student2["school"]);

// Delete property
delete student2.age;
console.log(student2);

// Nested Object
// Means object inside another object.
let student3 = {
    name:"Rahul",
    age:25,

    socials:{
        instagramid:"rahul123",
        facebookid:"rahulraj",
        followers:500,
        likes:200
    }
};
console.log(student3.socials.instagramid);
// *************************************************



// 7) Recognise how objects are stored [key:value pair], Traverse keys of an object, Array as object

// Objects are stored in key : value pairs.
let student = {
    name: "Shiva",
    age: 25,
    city: "Kathmandu"
};
// *************************************************


// Traverse object
// Object.keys() gives all keys as an array.
// Then we can loop through them.
Object.keys(student).forEach(function(key){
    console.log(key, student[key]);
});
// *************************************************


// Array as Object
// Array is also an object.
// Its indexes (0,1,2...) work as keys.
let arr = [10,20,30];
console.log(arr[0]); // 10
console.log(Object.keys(arr)); // ["0","1","2"]
// *************************************************




// 8) Timing Events
// [setTimeout(), setInterval(), clearTimeout(), clearInterval()]

// setTimeout()
// Runs the code only one time after given milliseconds.
let timer1 = setTimeout(function(){
    console.log("Runs once");
},2000);
// *************************************************


// clearTimeout()
// Stops a setTimeout before it runs.
clearTimeout(timer1);
// *************************************************


// setInterval()
// Runs the code again and again after every given milliseconds.
let timer2 = setInterval(function(){
    console.log("Runs repeatedly");
},1000);
// *************************************************


// clearInterval()
// Stops the setInterval.
clearInterval(timer2);
// *************************************************






// 9) Operations in Objects
// [freeze, seal, destructuring, object methods, this keyword]

let person = {
    name: "Shiva",
    age: 25
};

// freeze()
// Locks the whole object.
// Can't add, delete or change anything.
Object.freeze(person);
// *************************************************


// seal()
// Can't add or delete properties.
// Existing values can still be changed.
Object.seal(person);
// *************************************************


// Object Destructuring
// Takes only the properties we want
// and stores them into variables.
let student2 = {
    name: "Ram",
    age: 20,
    city: "Pokhara"
};

let {name, city} = student2;

console.log(name);
console.log(city);
// *************************************************


// Object Method
// A function stored inside an object.
let user = {
    name: "Shiva",

    greet: function(){
        console.log("Hello");
    }
};

user.greet();
// *************************************************





// this keyword
// 1)
// If we print this in the global scope (browser),
// this points to the window object.
console.log(this); // Window
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++


// 2)
// If we store this inside a variable in the global scope,
// it is still the window object.
let a = this;
console.log(a); // Window
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++



// 3)
// If we print this inside a normal function (browser),
// this also points to the window object.
function one(){
    console.log(this);
}
one(); // Window
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++



// 4)
// If we print this inside a normal function that belongs to an object,
// this points to the object that called the function.

let student = {
    name: "Shiva",
    show: function(){
        console.log(this);
    }
};
student.show(); // student object
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++



// 5)
// Arrow functions DO NOT create their own this.
// They take this from their parent.
// If the parent's this is window,
// arrow function's this is also window.

let demo = () => {
    console.log(this);
};
demo(); // Window
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++



// 6)
// If an arrow function is inside a normal function
// that belongs to an object,
// the arrow function uses the parent's this.
// Parent (show) has this = student.
// Therefore arrow's this = student.

let student2 = {
    name: "Ram",
    show: function(){

        let demo = () => {
            console.log(this);
        };
        demo();

    }
};
student2.show(); // student2 object
// ++++++++++++++ +++++++++ +++++++++++ +++++++++++



// 7)
// Normal function inside object
// and inside that normal function,
// another normal function is created.
// The inner normal function does NOT inherit parent's this.
// It creates its own this.

// In browser:
// inner normal function's this = window

let student = {
    name: "Shiva",
    show: function(){
        console.log(this.name); // this = student

        function inner(){
            console.log(this);
        }
        inner();
    }
};
student.show(); // this window


