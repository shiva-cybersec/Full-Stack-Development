// Contents:
// 1) ReactJS introduction
// 2) Uses of ReactJS
// 3) Library vs Framework
// 4) React vs ReactDOM
// 5) How to use React in HTML and where to write React code
// 6) What is JSX?
// 7) What is Babel?
// 8) Why do we need Babel?
// 9) How to use Babel?
// 10) React syntax
// 11) Creating elements using React
// 12) ReactDOM and root
// 13) root.render()
// 14) Creating multiple elements
// 15) React Fragment
// 16) JavaScript inside JSX
// 17) Variables inside JSX
// 18) JSX attributes
// 19) Components
// 20) Creating elements using functions
// 21) How React makes website building easier
// ***************************************************


// 1) REACTJS INTRODUCTION

// ReactJS = JavaScript library.

// ReactJS is an external library.
// It is code written by other developers
// that we can use in our own project.

// We mainly use ReactJS to create UI.
// UI means everything we see on a website,
// like text, buttons, images, cards, forms, etc.


// DOM = the HTML page represented as a structure inside the browser.

// When something on the page needs to change,
// with normal JavaScript, we can directly find that DOM element
// and change it ourselves.

// React makes this easier.
// Instead of manually changing the DOM,
// we tell React what the UI should look like.

// When something changes,
// React finds what needs to be changed
// and updates that part of the DOM.

// So, React helps us create UI
// and update the UI more easily.
// ***************************************************


// 2) USES OF REACTJS

// ReactJS is mainly used to create user interfaces (UI).

// Other libraries/tools can be used together with React:
//
// 1) GSAP -> to create animations
// 2) Swiper -> to create sliders/carousels
// 3) Three.js -> to create 3D elements
// 4) Lenis -> to create smooth scrolling
// 5) ReactJS -> to create UI
// ***************************************************


// 3) LIBRARY VS FRAMEWORK

// React = Library
// Like having a naksa (blueprint) and pre-made tools.
// You decide how to build the house.
// You control the structure.

// Angular = Framework
// Like hiring a thekदार (contractor).
// He already has a system and rules for building the house.
// You follow his structure and process.

// Simple:
// React -> You decide how to build. (You call it)
// Angular -> Framework decides how it should be built. (It calls you)

// Main difference:
// Library -> You are more in control.
// Framework -> Framework is more in control.
// ***************************************************


// 4) REACT VS REACTDOM

// React
// -> Used to create UI elements and components.

// ReactDOM
// -> Used to put React UI into the browser's DOM.

// Simple:
// React -> Creates what we want to show.
// ReactDOM -> Shows it on the HTML page.
// ***************************************************


// 5) HOW TO USE REACT IN HTML
// AND WHERE DO WE WRITE OUR REACT CODE?

// a) Search for React CDN.
// b) Copy the two CDN lines under "development".
// c) Paste them in the HTML file before our JS file.
// d) We write our React code inside the JS file.

// Example:
//
// <script src="React CDN"></script>
// <script src="ReactDOM CDN"></script>
// <script src="script.js"></script>
// ***************************************************


// 6) WHAT IS JSX?
// JSX = JavaScript XML.

// JSX is same as Javascript, but we can write HTML-like code directly in our Javascript code.

// Example:
const element = <h1>Hello React</h1>

// Simple:
// JSX = JavaScript + HTML-like code.
// ***************************************************


// 7) WHAT IS BABEL?

// Babel is an external JavaScript tool.
// Babel is a JavaScript compiler/transpiler.

// It changes/translates JSX into normal JavaScript
// that the browser can understand.

// Simple:
// Babel = translator.
// ***************************************************


// 8) WHY DO WE NEED BABEL?
// Browser does not directly understand JSX.

// Example:
const element = <h1>Hello</h1>

// So Babel translates JSX into JavaScript.
// JSX
// ↓
// Babel
// ↓
// JavaScript
// ↓
// Browser
// ***************************************************


// 9) HOW TO USE BABEL?

// First, load Babel using its external script.
<script src="babel-link-here"></script>

// Then use type="text/babel"
// for the script where we write JSX.
<script type="text/babel">
    function Hero() {
        return <h1>Hello React</h1>
    }
</script>

// type="text/babel"
// tells Babel to translate the code inside this script.
// ***************************************************


// 10) REACT SYNTAX
// Basic React syntax:

function ComponentName() {
    return (
        <>
            <h1>Hello React</h1>
        </>
    )
}

// Create a React root:
const root = ReactDOM.createRoot(
    document.querySelector("#main")
)

// Render the component:
root.render(<ComponentName />)

// Simple:
// function -> Creates a component.
// return -> Tells what the component should show.
// <> </> -> Groups multiple elements.
// createRoot() -> Creates a React root.
// render() -> Shows the React code on the page.
// ***************************************************


// 11) HOW TO CREATE AN ELEMENT USING JS
// AND PUT IT INSIDE HTML?

// Method 1: Normal JavaScript
// This is the normal way we used before React.

let h1 = document.createElement("h1")
h1.innerHTML = "Hello from JS"
document.body.appendChild(h1)


// Method 2: Using React
// Syntax:
//
// React.createElement(
//     "element name",
//     attributes,
//     "content"
// )

// Example:

let h2 = React.createElement("h2", null, "I am h2")
let h3 = React.createElement("h3", null, "I am h3")
let h4 = React.createElement("h4", null, "I am h4")

// React.createElement() creates a React element.
// But it does not directly put the element into HTML.
// We need ReactDOM to put it into the HTML.
// ***************************************************


// 12) CREATING A ROOT

// We need a place inside HTML
// where React will display our UI.

// In HTML:
//
// <div id="container"></div>

// Select that container first:
let container = document.querySelector("#container")

// Now make that container a React root:
let root = ReactDOM.createRoot(container)

// Think of it like:
//
// React element = plant
// ReactDOM root = ground where we plant it
// ***************************************************


// 13) root.render()
// render() is used to display the React element.

// Example:
root.render(h2)

// render() takes one main element.

// So we cannot simply do:
root.render(h2, h3, h4)

// Instead, we create one parent element
// and put multiple elements inside it.
// ***************************************************


// 14) CREATING MULTIPLE ELEMENTS

// Create a parent div:
let div = React.createElement(
    "div",
    {id: "parent", className: "ok"},
    [h2, h3, h4]
)

// Then render the parent:
root.render(div)

// Explanation:
//
// React.createElement(
//     "div",                  -> element we want to create
//     {id: "parent"},         -> attributes
//     [h2, h3, h4]            -> elements inside it
// )

// The second argument is used to give attributes.
// We give an object containing key-value pairs.

// Example:
// {id: "parent", className: "ok"}

// In React, use "className" instead of "class".

// Example:
// {className: "ok"}
// ***************************************************


// 15) REACT FRAGMENT
// <> </> is called a React Fragment.

// It is used to group multiple elements
// without creating an extra HTML element.

// Example:
const elements = (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
)

// Simple:
// <> </> -> Groups elements without adding a new HTML element.
// ***************************************************


// 16) JAVASCRIPT INSIDE JSX

// We can write JavaScript inside JSX
// using { }.

// Example:
<p>Sum = {2 + 2}</p>

// Output:
// Sum = 4

// We can also use JavaScript methods:
<p>{"hello".toUpperCase()}</p>

// Output:
// HELLO

// Simple:
// { } -> Used to write JavaScript inside JSX.
// ***************************************************


// 17) VARIABLES INSIDE JSX

// We can create a variable
// and use it inside JSX.

const name = "Shiva"
const greeting = <h1>Hello {name}</h1>

// Output:
// Hello Shiva

// Simple:
// {name} -> Takes the value stored inside name.
// ***************************************************


// 18) JSX ATTRIBUTES

// We can give attributes to JSX elements
// just like we do in HTML.

// Example:
<h1 id="title">Hello</h1>
<img src="image.jpg" alt="My Image" />

// For CSS class,
// React uses "className" instead of "class".

<h1 className="title">Hello</h1>

// Simple:
// Attributes give extra information to an element.
// ***************************************************


// 19) COMPONENTS
// Component = a function that returns JSX.

// Example:
function Hero() {
    return (
        <>
            <h1>Welcome</h1>
            <p>This is my Hero section.</p>
        </>
    )
}

// We can show the component:
root.render(<Hero />)

// <Hero /> -> Uses the Hero component.

// Simple:
// Function -> Component
// Component -> UI part
// <Hero /> -> Uses the component.
// ***************************************************


// 20) CREATING ELEMENTS USING FUNCTIONS

// If we create something inside a function
// and want to give it back,
// we use return.

// We don't use console.log()
// because console.log() only prints in the console.

function abc() {
    return React.createElement(
        "p",
        null,
        "Lorem ipsum hu mei"
    )
}

// Now render the value returned by abc():
root.render(abc())

// abc()
// -> Function runs.
// -> React.createElement() creates a React element.
// -> return sends the element back.
// -> root.render() displays the element.
// ***************************************************


// 21) HOW REACT MAKES WEBSITE BUILDING EASIER?
// a) We can break a big website into small components.

// Example:
// Navbar
// Hero
// About
// Contact
// Footer

// b) We can reuse the same component
// instead of writing the same code again.

// c) JSX lets us write HTML-like code
// directly inside JavaScript.

// d) We can put JavaScript values inside JSX
// using { }.

// e) React handles UI updates for us,
// so we don't have to manually change every part of the DOM.

// Simple:
// React = Create small reusable UI parts
// and combine them to build a complete website.
// ***************************************************