// ************Questions:************


// 1) Write a function sayHello() that prints "Hello JavaScript".
// Solution:

function sayHello(){
    console.log("Hello JavaScript");
}
sayHello();
// *************************************************


// 2) Create a function add(a, b) that returns their sum and log the result.
// Solution:

function add(a,b){
    return a+b;
}
console.log(add(23,44));
// *************************************************



// 3) Write a function with a default parameter name = "Guest" that prints "Hi <name>".
// Solution:

function greeting(name = "Guest"){
    console.log(`Hi ${name}`);
}

greeting("Shiva");
greeting();
// *************************************************


// 4) Use rest parameters to make a function that adds unlimited numbers.
// Solution:

function restTry(...nums){
    // ...nums takes all arguments
    // and stores them inside an array named nums.

    let ans = nums.reduce(function(acc,val){

        // acc = previous result box
        // val = current array value
        // returned value goes back into acc

        return acc + val;
    },0);
    console.log(ans);

}
restTry(23,44,2,1,2,4,1,2,3,4,55,6,2,44,3,5,222,3);
// *************************************************




// 5) Create an IIFE that prints "I run instantly!".
// Solution:

(function(){
    console.log("I run instantly!");
})();

// IIFE = function that runs immediately after creations
// *************************************************


// 6) Make a nested function where the inner one prints a variable from the outer one.
// Solution:

function parent(){
    let parentVar = 20;
    function child(){
        console.log(parentVar);
    }
    child();

}
parent();


// Inner function can access outer function variable.
// *************************************************



// 7) Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// Solution:

let fruits = ["apple","mango","grapes","banana","orange"];

fruits.push("pineapple"); // add at end
fruits.shift();           // remove from beginning

console.log(fruits);
// *************************************************




// 8) Use a for loop to print all elements of an array.
// Solution:

let arr = ["element1","element2","element3","element4","element5"];
// using for loop
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


// forEach alternative:
arr.forEach(function(val){
    console.log(val);

});
// *************************************************



// 9) Create an object person with keys name, age, city and print each key's value.
// Solution:

let person = {
    name:"Shiva",
    age:25,
    city:"Kathmandu"

};

Object.keys(person).forEach(function(key){

    console.log(person[key]);
});


// Object.keys() gives all keys of object and store them in array
// *************************************************



// 10) Use setTimeout() to log "Time's up!" after 2 seconds.
// Solution:

let timer1 = setTimeout(function(){
    console.log("Time's up!");
},2000);


// 2000 milliseconds = 2 seconds
// *************************************************



// 11) Write a higher-order function runTwice(fn)
// that takes another function and executes it two times.
// Solution:

function runTwice(fn){
    fn();
    fn();
}

runTwice(function(){
    console.log("Callback Function");
});


// Higher-order function = function that takes another function as argument
// Callback = function passed as argument
// *************************************************




// 12) Create one pure function and one impure function.
// Solution:

// Pure function
function pure(a,b){
    return a+b;
}

console.log(pure(20,30));
console.log(pure(20,30));

// Same input gives same output.
// Does not change outside data.



// Impure function
let count = 0;
function impure(a,b){
    count++;
    console.log(a+b+count);
}

impure(20,30);
impure(20,30);

// Output changes because it uses/changing outside variable.
// *************************************************




// 13) Object destructuring inside parameters.
// Solution:

function obj({name,age}){
    console.log(name,age);
}

obj({
    name:"Shiva",
    age:25,
    roll_no:21
});


// Takes only required values from object.
// *************************************************



// 14) Difference between normal function and arrow function with this.
// Solution:

let difference = {
    fun1:function(){
        console.log(this);
    },


    fun2:()=>{
        console.log(this);
    },


    fun3:function(){
        let newArrow = ()=>{
            console.log(this);
        }
        newArrow();
    },


    fun4:function(){
        function abc(){
            console.log(this);
        }
        abc();

    }
};


difference.fun1(); // this = difference object
difference.fun2(); // this = parent this (window)
difference.fun3(); // arrow takes parent this = difference object
difference.fun4(); // normal inner function this = window
// *************************************************




// 15) Use map() to create squared array.
// Solution:

let arr2 = [23,4,2,1,234,22,5];
let newArr2 = arr2.map(function(val){
    return val * val;
});

console.log(newArr2);
// map() = take every value, perform operation on each elements, return new array.
// *************************************************



// 16) Use filter() to get even numbers.
// Solution:

let arr3 = [23,4,2,1,234,22,5,8,6,44,56,88,23,53,77];
let newArr3 = arr3.filter(function(val){
    return val%2===0;
});
console.log(newArr3);

// filter() = take each elements, check condition, keep only true values.
// *************************************************



// 17) Use reduce() to find total salary.
// Solution:

let salary = [1000,2000,3000];
let totalSalary = salary.reduce(function(acc,val){
    return acc+val;
},0);

console.log(totalSalary);
// reduce() = combine all values into one final value.
// *************************************************




// 18) Use some() and every().
// Solution:

let names = ["Shiva","Bhumi","Roma","Sita","Hira","Sagar","Om"];

let result1 = names.some(function(val){
    return val.length>3;
});
let result2 = names.every(function(val){
    return val.length>3;
});

console.log(result1);
console.log(result2);


// some() = at least one value should pass.
// every() = all values should pass.
// *************************************************



// 19) Test Object.freeze() and Object.seal().
// Solution:

let users = {
    user1:"Shiva",
    user2:"Nitin",
    user3:"Punit"
};


// seal
Object.seal(users);

users.user1 = "Roman"; // allowed
delete users.user1;    // not allowed
console.log(users);


// freeze
Object.freeze(users);

users.user1 = "Ram"; // not allowed
delete users.user1;  // not allowed

// seal = update allowed, add/delete not allowed.
// freeze = update/add/delete nothing allowed.
// *************************************************




// 20) Nested object user -> address -> city.
// Solution:

let user = {
    address:{
        city:"Kathmandu"
    }
};
console.log(user.address.city);

// Working:
// user → address → city → Kathmandu