// Contents:
// 1) Part 1 — More on DOM
// 2) Array vs Object
// 3) document.createElement()
// 4) appendChild()
// 5) Giving CSS to Created Elements
// 6) Part 2 — More on DOM
// 7) Synchronous vs Asynchronous
// 8) JavaScript and Asynchronous Tasks
// 9) setTimeout()
// 10) setInterval()
// 11) clearInterval()
// 12) Part 3 — More on DOM
// 13) Different Event Listeners
// 14) Event Object
// 15) Pointer Event Object
// 16) Keyboard Event Object
// 17) Mouse Event Object
// 18) Custom Cursor
// 19) stopPropagation()
// 20) Dataset
// 21) Audio
// 22) Keyboard Events — keydown, e.key and e.code
// 23) NodeList
// 24) querySelectorAll() and NodeList
// 25) Converting NodeList into Array
// 26) Parent and Child
// 27) parentNode
// 28) childNodes
// 29) Text Nodes
// ******************************************************************************************







// ****** Part 1 More on DOM *****
// Array stores multiple values.
// Object stores information about one thing.
// Example:
// arr = many teams
// object = one team information

// create element
// syntax: document.createElement("tagname")

let h2 = document.createElement("h2")
h2.innerHTML = "Download"

// append child
let main = document.querySelector("main")
main.appendChild(h2)

// giving css
h2.style.color = "yellow"
// *********************************







// ******* Part 2 More on DOM ******
// synchronize = only one task at one time
// Example: old keypad phones where you could only do one task at a time.

// asynchronize = multiple tasks can happen without blocking the main program.
// Example: listening to music while downloading a file.

// JavaScript is synchronous and single-threaded by nature.
// But with the help of Web APIs (setTimeout, fetch, events, etc.)
// JavaScript can perform asynchronous tasks.

// setTimeout() = Run a function only once after a given delay.

// setInterval() = Run a function repeatedly after every given milliseconds.
// It keeps running until clearInterval() is called.

// run this function once after 1 second
setTimeout(function () {
    console.log("print once after 1 second")
}, 1000)

// run this function every 1 second
setInterval(function () {
    console.log("print after every 1 second")
}, 1000)

// disadvantage of setInterval() is that it keeps running forever.
// so store it inside a variable.

let a = 0

let val = setInterval(function () {
    a++
    console.log(a)
}, 500)

// clearInterval() stops the interval.
// keep it inside setTimeout() otherwise clearInterval()
// runs immediately.

setTimeout(() => {
    clearInterval(val)
}, 5000)

// ****************************************************








// ******** Part 3 More on DOM *********************

// Different Event Listeners
// mouseenter
// mouseleave
// mousemove
// click
// dblclick
// mousedown
// mouseup
// wheel
// keydown
// keyup
// pointerdown
// pointermove
// pointerup

let img = document.querySelector("img")
let msg = document.querySelector("h2 span")
let body = document.body

img.addEventListener("mouseenter", function () {
    msg.innerHTML = "Go away from me"
    body.style.backgroundColor = "green"
})

img.addEventListener("mouseleave", function () {
    msg.innerHTML = "Come closer to me"
    body.style.backgroundColor = "black"
})

// body can be selected in two ways

// document.querySelector("body")
// document.body

// Every event gives its own Event Object.
// Mouse events -> MouseEvent
// Keyboard events -> KeyboardEvent
// Pointer events -> PointerEvent

// console.log(e) to see all available properties.






// **************** Pointer Event Object ****************
e.target              // Click/touch gareko element
// target → Kaslai touch/click gareko?

e.clientX             // Pointer ko X coordinate
e.clientY             // Pointer ko Y coordinate
// clientX/Y → Screen ma pointer kata xa?

e.offsetX             // Pointer ko X position inside element
e.offsetY             // Pointer ko Y position inside element
// offsetX/Y → Element vitra pointer kata xa?

e.pointerType         // mouse, touch, pen
// pointerType → Mouse ho, touch ho, ki pen?

e.pointerId           // Pointer ko unique ID
// pointerId → Pointer ko unique number

e.type                // pointerdown, pointermove, pointerup
// type → Kun pointer event?

e.preventDefault()    // Browser ko default action rokxa
// preventDefault() → Default browser action rok.






// **************** Keyboard Event Object ****************
e.key                 // Press gareko key
// key → Kun key press bhayo?

e.code                // Physical key
// code → Kun keyboard button press bhayo?

e.keyCode             // OLD numeric key code (deprecated)
// keyCode → Old number of key

e.ctrlKey             // Ctrl press xa?
e.shiftKey            // Shift press xa?
e.altKey              // Alt press xa?
e.repeat              // Key hold gareko xa?

e.type                // keydown, keyup

e.preventDefault()    // Browser ko default action rokxa





// **************** Mouse Event Object ****************
e.target              // Click gareko element
// target → Kaslai click gareko?

e.x                   // Mouse X coordinate
e.y                   // Mouse Y coordinate

e.clientX             // Mouse X coordinate (viewport)
e.clientY             // Mouse Y coordinate (viewport)
// clientX/Y → Screen ma mouse kata xa?

e.offsetX             // Mouse X inside element
e.offsetY             // Mouse Y inside element
// offsetX/Y → Element vitra mouse kata xa?

e.button              // 0=Left 1=Middle 2=Right
// button → Kun mouse button?

e.type                // click, mousemove, mousedown etc.
// type → Kun event?

e.preventDefault()    // Browser ko default action rokxa

e.stopPropagation()   // Event parent samma jana didaina

// e.x and e.clientX are almost same.
// e.y and e.clientY are almost same.


// Custom cursor
// position:absolute + transform:translate(-50%,-50%)


// stopPropagation()
// If child is clicked, don't let parent event run.


// Dataset
// HTML:
// data-index="0"
//
// JS:
// element.dataset.index
//
// It returns the value as a string.


// Audio
// Create audio
new Audio("audio.mp3")

// Play
audio.play()

// Pause
audio.pause()

// Start from beginning
audio.currentTime = 0


// Keyboard example
// keydown
// e.key  -> actual key pressed
// e.code -> physical keyboard key








// ******** NodeList ********
// querySelectorAll() returns a NodeList.

// NodeList supports:
// forEach()
// length
// indexing -> nodeList[0]

// NodeList doesn't support:
// map()
// filter()
// push()
// pop()

// Convert NodeList into Array
Array.from(nodeList)


// NodeList itself doesn't have addEventListener().
// Use forEach() to add event listeners to each element.







// ******** Parent & Child ********
// element.parentNode
// element.childNodes

// childNodes returns:
// Elements
// Text nodes (spaces, Enter)
// Comments

// Pressing Enter or adding spaces between tags
// creates Text Nodes.