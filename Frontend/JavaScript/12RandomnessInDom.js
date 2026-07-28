// JavaScript is a programming language.

// Web API acts as a bridge between JavaScript and the browser.
// JavaScript itself cannot directly control the browser.
// Browser provides Web APIs like DOM, setTimeout, events, etc.


// Naming convention:
// In JavaScript, class names usually start with a capital letter.
// Example:
// class Student {}
// class FootballTeam {}


// Math.random():
// Math.random() is an inbuilt method.
// A method means a function that belongs to an object/class.

// Math.random() gives a random decimal number between 0 and 1.
// Example:
console.log(Math.random());


// If we multiply Math.random() by 10:
let a = Math.random() * 10;
console.log(a);

// Output range:
// 0 to 9.999999
// 10 will never come


// If we need a whole number (integer):
// Math.floor() removes the decimal part.
console.log(Math.floor(a));


// Direct example:
console.log(Math.floor(Math.random() * 100));

// Output range:
// 0 to 99


// Formula:
// Math.floor(Math.random() * maxNumber)


// Examples:
Math.floor(Math.random() * 10);
// gives: 0 - 9

Math.floor(Math.random() * 100);
// gives: 0 - 99

Math.floor(Math.random() * 1000);
// gives: 0 - 999



// RGB Color System:
// RGB means:
// R = Red
// G = Green
// B = Blue

// Syntax:
// rgb(red, green, blue)

// Each value range:
// 0 - 255


// Examples:
rgb(0,0,0);
// black color

rgb(255,255,255);
// white color


// More value of a color means that color becomes stronger.

// Example:
rgb(80,40,30);

// Red value is highest,
// so color will look more reddish.


// Think like mixing ingredients:
// If you add more rice than curry and dal,
// rice will dominate.

// Same way:
// Higher RGB value = that color dominates.



// Array of Objects:
let arr = [
    {
        game: "Cricket",
        team: "Lalitpur",
        captain: "Player Name",
        flag: "flag image",
        members: [
            "Player 1",
            "Player 2",
            "Player 3"
        ]
    }
];


// Array stores multiple values.
// Object stores information about one thing.

// Example:
// arr = many teams
// object = one team information
