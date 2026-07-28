// ***** Introduction To DOM ******

// DOM = Document Object Model
// Frontend JavaScript means working with DOM.

// DOM has 4 main pillars:

// 1) Selecting an Element
// 2) Changing HTML
// 3) Changing CSS
// 4) Event Listeners



// 1) Selecting an Element
// Means taking an element from HTML and storing it in a variable.
// Otherwise you cannot control/change it.

let h1 = document.querySelector("h1");
console.log(h1);


// querySelector()
// selects the first matching element.

// Examples:
document.querySelector("h1");     // tag
document.querySelector("#box");   // id
document.querySelector(".item");  // class
// *************************************************


// 2) Changing HTML
// Means changing the content of selected element.
let p = document.querySelector("p");
p.innerHTML = "This is changed paragraph";

console.log(p);


// innerHTML
// Changes HTML content and can read HTML tags.
p.innerHTML = "<b>Hello</b>";


// textContent
// Prints only text, does not read HTML tags.
p.textContent = "<b>Hello</b>";
// *************************************************


// 3) Changing CSS
// Select element first,
// then use .style to change CSS.
let cssChanging = document.querySelector("h1");

cssChanging.style.color = "red";
cssChanging.style.backgroundColor = "white";


// Note:
// CSS property with - changes to camelCase.
// background-color ❌
// backgroundColor ✅
// *************************************************


// 4) Event Listeners
// Used to track user actions.
// Example:
// click, mouse movement, typing, drag etc.
let btn = document.querySelector("button");

btn.innerHTML = "Click Me";
btn.style.color = "black";
btn.style.backgroundColor = "lightblue";


btn.addEventListener("click", function(){

    h1.innerHTML = "I am changed";
    p.style.color = "red";
    p.style.backgroundColor = "yellow";
    h1.style.fontSize = "45px";

});

// addEventListener()
// waits for an action,
// then runs the functions
// *************************************************




// More ways of selecting elements

// Selecting by ID
// No need to write # because method already knows it is id.
let ID = document.getElementById("box");


// Selecting by class
let classname = document.getElementsByClassName("item");


// Selecting multiple elements
let allH1 = document.querySelectorAll("h1");


// querySelectorAll()
// selects all matching elements.
// *************************************************


// More on changing HTML
let newh1 = document.querySelector("h2");
newh1.innerHTML = "<i>Psycho</i>";


// innerHTML → reads HTML tags
newh1.textContent = "<i>Psycho</i>";

// textContent → prints exactly what we write