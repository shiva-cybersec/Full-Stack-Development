// Contents:
// 1) this Keyword
// 2) this in Global Scope
// 3) this in Normal Functions
// 4) this in Object Methods
// 5) this in Arrow Functions
// 6) this in Nested Normal Functions
// 7) this in Arrow Functions Inside Normal Functions
// 8) call()
// 9) apply()
// 10) bind()
// 11) Difference Between call(), apply() and bind()
// 12) Class Expression
// 13) Class Expression and Hoisting
// 14) Inheritance
// 15) extends Keyword
// 16) super() Keyword
// 17) Private Variables
// 18) Getter and Setter
// 19) get Keyword
// 20) set Keyword
// 21) Difference Between Getter and Setter
// ******************************************************************************************



/*
1) this keyword
2) call()
3) apply()
4) bind()
5) class expression
6) hoisting
7) inheritance
8) getter and setter
*/

// *******************************************************************
// a) this keyword
// *******************************************************************

// this changes depending on HOW a function is called,
// not where it is written.


// 1) Global scope (Browser)
// Directly in browser

console.log(this) // window

let variable = this
console.log(variable) // window

// Note:
// In Node.js, this is NOT window.
// *******************************************************************


// 2) Normal function (ES5)
// By default, in browser (non-strict mode)
// this = window

function somefnc(){
    console.log(this)
}

somefnc() // window

// In strict mode
// this = undefined
// *******************************************************************


// 3) Normal function inside object (Method)
let obj = {
    name:"shiva",
    fnc:function(){
        console.log(this)
    }
}

obj.fnc() // obj

// this = object because
// object called the function.
// *******************************************************************


// 4) Arrow function inside object
let obj2 = {
    name:"parvati",
    fnc:()=>{
        console.log(this)
    }
}

obj2.fnc()

// Browser
// window

// Why?
// Arrow functions DO NOT create their own this.
// They use this from their outer scope.
// *******************************************************************


// 5) Normal function inside normal function
let obj3 = {

    name:"sagar",
    fnc:function(){
        function abc(){
            console.log(this)

        }
        abc()
    }
}

obj3.fnc()

// Browser
// window

// Strict mode
// undefined
// *******************************************************************


// 6) Arrow function inside normal function
let obj4={

    name:"bhumi",
    fnc:function(){
        let arrowfnc=()=>{

            console.log(this)
        }
        arrowfnc()
    }
}

obj4.fnc()

// obj4

// Arrow function uses
// this of fnc().
// *******************************************************************






// *******************************************************************
// call()
// *******************************************************************

// call()
// Changes this
// and immediately runs the function.

// Syntax
// functionName.call(thisValue,arg1,arg2,...)

let object={
    noofworkers:24,
    ageofworker:30
}

function abc(a,b){
    console.log(this,a,b)

}

abc.call(object,10,20)

// Output
// object 10 20

// Normal call
abc()

// Browser
// window
// *******************************************************************









// *******************************************************************
// apply()
// *******************************************************************
// Same as call()
// Difference is 
// Arguments are passed inside ONE ARRAY.

// Syntax
// functionName.apply(thisValue,[arg1,arg2,...])

let object2={
    noofworkers:24,
    ageofworker:30
}

function abcd(a,b,c){
    console.log(this,a,b,c)

}

abcd.apply(object2,[1,2,3])

// Output
// object2 1 2 3

// Normal call
abcd()

// Browser
// window undefined undefined undefined
// *******************************************************************







// *******************************************************************
// bind()
// *******************************************************************

// bind()
// Changes this
// BUT
// DOES NOT RUN the function.
// It RETURNS a NEW function.

// Syntax
// let newFunction=functionName.bind(thisValue,arg1,arg2)

let object3={
    noofworkers:24,
    ageofworker:30
}

function abcde(a,b){
    console.log(this,a,b)
}

let newfnc=abcde.bind(object3,20,30)
// Nothing prints yet.

newfnc()

// Output
// object3 20 30


abcde()
// Browser
// window undefined undefined
// because
// no arguments were passed.
// *******************************************************************






// *******************************************************************
// Easy Trick
// *******************************************************************

/*

call()

Change this
Run immediately

------------------------

apply()

Change this
Run immediately
Arguments inside []

------------------------

bind()

Change this
Do NOT run immediately

Returns a new function

Need to call it later.

*/
// *******************************************************************





// class expression: any class can be stored inside a variable
// so the difference is classname is written in variable place and in normal class it is written after the class keyword
let Animal = class{
    constructor(){
        this.name = "babli"
        this.color = "white"
    }
}

let ani = new Animal()

// hoisting:
// hoisting is not possible in class expression
// hoisting is possible in normal class
// *******************************************************************





// inheritance: 
// if there is a class having some code, and if new class we create also has same features that we had created earlier then instead of writing the same code again we can just extend the previous class and and we can also add new things in this new class
class Animals{
    constructor(){
        this.ears = 2;
        this.eyes = 2;
        this.legs = 4;
    }
    eat(){};
    breath(){};
}

class dog extends Animals{
    constructor(){
        super()
        this.bark = true;
    }
    pee(){}
}
console.log(new dog())
// *******************************************************************






// private variable
// getter and setter
class Demo{
    constructor(){
        this.price = 2000; //public variable
        this._cost = 3000; //not private but it's telling browser that this should be treated as a private variable
    }
    set okay(val){
        return this._cost
    }
    get okay(){
        return this._cost
    }
}
let d1 = new Demo();
d1._cost = 4000; // changed private variable 
console.log(d1.okay) // gives 4000
d1.okay(5000)


// so to fix this issue we have getter and setter
// for getter: get anyname(){}
// for setter: set anyname(anyparameter){} //paramter is mandatory