// ********** SECTION 1: Objects and OOPS Thinking (Foundation) *****
// 1) Create a user object that stores name and email and has a login method which prints "User logged in"
let user = {
    name: "Shiva",
    email: "abc@gmail.com",
    login: function(){
        console.log("User logged in")
    }
}
console.log(user)
// *******************************************************************




// 2) Imagine you now have 5 users
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// First method:
// I would either create separate objects for every user or use an array of objects.

let users = [

{
    name: "userone",
    email: "userone@gmail.com",
    login: function(){
        console.log("User logged in")
    },
},
{
    name: "usertwo",
    email: "usertwo@gmail.com",
    login: function(){
        console.log("User logged in")
    }
},
{
    name: "userthree",
    email: "userthree@gmail.com",
    login: function(){
        console.log("User logged in")
    }
},
{
    name: "userfour",
    email: "userfour@gmail.com",
    login: function(){
        console.log("User logged in")
    }
},

{
    name: "userfive",
    email: "userfive@gmail.com",
    login: function(){
        console.log("User logged in")
    }
}
]

// Second method using a class
class AllUsers {

    constructor(name,email){
        this.name = name
        this.email = email
    }

    login(){
        console.log("User logged in")
    }

}

let usr1 = new AllUsers("Shivji","shivji@gmail.com")
let usr2 = new AllUsers("Ram","ram@gmail.com")
let usr3 = new AllUsers("Hari","hari@gmail.com")

console.log(usr1)
usr1.login()
// *******************************************************************




// 3) Create a product object that stores name and price and has a method which returns the final price after discount
let Product = {

    name: "shirt",
    price: 6000,

    discount: function(){
        return this.price - 500
    }

}

console.log(Product.discount())
// *******************************************************************




// ********* SECTION 2: Classes and Objects **********************
// 4) Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car{

    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
    }

    drive(){
        console.log(`${this.brand} is driving at ${this.speed}`);
    }

}

let c1 = new Car("Toyota",60)
console.log(c1)
c1.drive()
// *******************************************************************




// 5) Create two different car objects from the same class and verify that their data is different

class Cars{

    constructor(car,speed){
        this.car = car
        this.speed = speed

        this.details = function(){
            return `${this.car} ${this.speed}`
        }
    }

}

let cr1 = new Cars("Toyota",60)
let cr2 = new Cars("Honda",80)

console.log(cr1.details())
console.log(cr2.details())
// *******************************************************************




// 6) Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// Ans:
// Without classes I would create separate objects or constructor functions.
// As the project becomes larger, there would be lots of repeated code,
// it would become difficult to manage, update, debug and maintain.
// *******************************************************************






// ******** SECTION 3: Constructor and this keyword ****************
// 7) Create a student class whose constructor accepts name and rolls
// add a method introduce that prints both values

class Student{

    constructor(name,rolls){
        this.name = name
        this.rolls = rolls

    }

    introduce(){
        console.log(this.name + " " + this.rolls)
    }

}

let std1 = new Student("Shiva",22)
std1.introduce()
// *******************************************************************






// ********** SECTION 4: Constructor Functions and Prototypes *****
// 8) Create a User constructor function (do not use class syntax)

function User(name){

    this.name = name

}

let name1 = new User("Shiva")
console.log(name1)
// *******************************************************************




// 9) Add a login method in two ways:
// First, inside the constructor
// Then move the method to the prototype

function userLogin(name){

    this.name = name

    // Method inside constructor
    this.login = function(){
        console.log("User logged in")
    }

}

// Method on prototype
userLogin.prototype.logging = function(){
    console.log("User logged in")
}




// 10) Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

let userlog1 = new userLogin("Shiva")
let userlog2 = new userLogin("Ram")

// Constructor methods
console.log(userlog1.login === userlog2.login)      // false

// Prototype methods
console.log(userlog1.logging === userlog2.logging)  // true

// Reason:
// login is created separately for every object, so each object gets a different function in memory.
// logging is stored once inside the prototype, so every object shares the same function.
// *******************************************************************






// **********   SECTION 5: call, apply, bind **********
// 11) Create a function that prints this.name

function cab(a,b,c,...abc){

    console.log(this.name)
    console.log([a,b,c])
    console.log(abc)

}

let object1 = {
    name : "Shiva"
}

// call() immediately calls the function.
// Arguments are passed normally.
cab.call(object1,2,3,4,4,2)

// apply() immediately calls the function.
// Arguments are passed inside a single array.
cab.apply(object1,[1,2,3,4,5])

// bind() does NOT call the function immediately.
// It returns a new function with this and arguments already attached.
let newfnc5 = cab.bind(object1,10,20,30,2,11)
newfnc5()

// Normal function call.
// Here this refers to the global object (window in browser).
// In browsers, window.name exists and is an empty string by default unless changed.
cab(23,4,2,3,4,2,34)