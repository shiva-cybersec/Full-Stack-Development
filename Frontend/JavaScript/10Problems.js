// ************Questions:************

// 1) Write a function sayHello() that prints "Hello JavaScript".
// Solution:
function sayHello()
{console.log("Hello JavaScript.")   
}
sayHello();
// *************************************************


// 2) Create a function add(a, b) that returns their sum and log the result.
// Solution:
function add(a, b){
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



// 4) Use rest parameters to make a function that adds unlimited numbers
// Solution:
function restTry( ...nums){
    // let sum = 0; 

    // Method 1: using for loop
    // for(let i = 0; i<nums.length; i++){
    //     sum += i;
    // } 

    // Method 2: using forEach loop
    // nums.forEach(function(val){
    //     sum += val;
    // })

    // console.log(sum) ;

    // Method 3: using reduce()
    // take elements one by one until last element
    // every element pass it to val
    // send it to return and return performs an operation
    // and acc is a box to store and its default value is written below after },
    // returned value is store inside acc, and second loop continues till last element is received and the total sum is store in let ans
    let ans = nums.reduce(function(acc, val){
        return acc + val;
    }, 0)
    console.log(ans)

}
// restTry(23,44,2,1,2,4,1,2,3,4,55,6,2,44,3,5,222,3)
// *************************************************



// 5) Create an IIFE that prints "I run instantly!".
// Solution:
(function (){
    console.log("I run instantly!")
})();
// *************************************************



// 6) Make a nested function where the inner one prints a variable from the outer one
// Solution:
function parent(){
    let parentVar = 20;
    function child(){
        console.log(parentVar)
    }
    child()
}
parent()// *************************************************



// 7) Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// Solution:
let fruits = ["apple", "mango", "grapes", "banana", "orange"]
fruits.push("pineapple")
fruits.shift()
console.log(fruits)
// *************************************************



// 8) Use a for loop to print all elements of an array
// Solution:
let arr = ["element1", "element2", "element3", "element4", "element5"]
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
// or
arr.forEach(function(val){
    console.log(val)
})
// *************************************************



// 9) Create an object person with keys name, age, city and print each key's value
// Solution:
let person = {
    name: "Shiva",
    age: 25,
    city: "kathmandu"
}
// console.log(person.name)
// console.log(person['age'])
// or just do
Object.keys(person).forEach(function(val){
    console.log(person[val])
})
// *************************************************




// 10) Use setTimeout() to log "Time's up!" after 2 seconds
// Solution:
let timer1 = setTimeout(function(val){
    console.log("Time's up!")
}, 12400)
// *************************************************




// 11) Write a higher-oder function runTwice(fn) that takes another function and executes it two times
// Solution:
function runTwice(fn){
    fn();
    fn();
}
runTwice(function(){
    console.log("Callback Function")
});
// *************************************************




// 12) Create one pure function that always returns the same output for the given input, and one impure function using a global variable
// Solution:
// Pure function
let pure = 25;
function notTouched(a,b){
    console.log(a+b)
}
notTouched(20,30);
notTouched(20,30)


// Impure function
let impure = 30;
function touched(a,b){
    console.log(Math.random + a + b)
    console.log(a + impure++)
}
touched(20,30)
touched(20,30)
// *************************************************




// 13) Write a function that uses object destructuring inside parameters to extract and print name and age.
// Solution: 
function obj({name, age} ){
    console.log(name, age)
}
obj({
    name: "Shiva",
    age: 25,
    roll_no: 21
})
// *************************************************




// 14) Demonstrate the difference between normal function and arrow function when used as object methods( this issue).
// Solution:
let difference = {
    fun1 : function (){
        console.log(this) // object is difference key_value pairs
    },
    fun2: ()=>{
        console.log(this) //object is parent object and parent is difference and difference object is window 
    },
    fun3: function(){
        let newArrow = ()=>{
            console.log(this)
        }
        newArrow(); //object is parent object and parent is function and function object is difference key_value pairs
    }
}
difference.fun1();
difference.fun2();
difference.fun3();
// *************************************************



// 15) Given an array of numbers, use map() to create a new array where each number is squared.
// Solution:
let arr2 = [23,4,2,1,234,22,5]
let newArr2 = arr2.map(function(val){
    return val * val;
 });
 console.log(newArr2)
 // *************************************************




 // 16) Use filter() to get only even numbers from an array
 // Solution:
let arr3 = [23,4,2,1,234,22,5,8,6,44,56,88,23,53,77]
let newArr3 = arr3.filter(function(val){
    return val%2===0;
})
console.log(newArr3);
// *************************************************




// 17) Use reduce() to find the total salary from an array numbers [1000, 2000, 3000].
// Solution:
let arr4 = [1000,2000,3000];
let newArr4 = arr4.reduce(function(acc, val){
    return acc + val;
},0)
console.log(newArr4);
// *************************************************



