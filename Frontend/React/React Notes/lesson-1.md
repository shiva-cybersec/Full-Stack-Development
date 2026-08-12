// Contents:
// 1) Uses of <script> element of HTML
// 2) What is React?
// 3) Why React and ReactDOM?
// 4) Library vs Framework
// 5) React syntax
// 6) What is JSX?
// 7) What is Babel?
// 8) Why do we need Babel?
// 9) How to use Babel?
// 10) ReactDOM.createRoot()
// 11) root.render()
// 12) How to display multiple elements
// 13) React Fragment
// 14) JavaScript inside JSX
// 15) Variables inside JSX
// 16) JSX attributes
// 17) Components
// 18) How React makes website building easier
// ======================================================


// 1) USES OF <script> ELEMENT OF HTML <script> tag is used to add JavaScript to our HTML file.

// a) We can directly write JavaScript inside <script>.
<script> console.log("Hello JavaScript") </script>

// b) We can write JavaScript in another file and connect that file using "src".
<script src="script.js"></script>

// c) The JavaScript file can be inside our computer or it can be somewhere on the internet. We can connect it using "src".
<script src="https://example.com/script.js"></script>

// d) type="module" is used when we are working with JavaScript modules.
<script type="module" src="script.js"></script>
// ======================================================


// 2) WHAT IS REACT?
// React is a JavaScript library.

// Library means a bunch of code
// already written by someone else
// which we can use in our project.

// React helps us create the UI of websites and apps easily.

// UI = what the user sees on the screen.
// ======================================================



// 3) WHY DO WE USE REACT AND REACTDOM?
// React and ReactDOM do different jobs.

// a) React
// -> React is used to create the UI.
// -> We create elements and components using React.

// b) ReactDOM
// -> ReactDOM connects React with the HTML page.
// -> It puts our React UI inside the browser.

// For React website:
// React + ReactDOM

// For React Native app:
// React + React Native

// Simple:
// React -> Creates what we want to show.
// ReactDOM -> Shows it on the HTML page.
// ======================================================


// 4) LIBRARY VS FRAMEWORK
// React = Library
// Like having a naksa (blueprint) and pre-made tools.
// You decide how to build the house.
// You control the structure.

// Angular = Framework
// Like hiring a thekदार (contractor).
// He already has a system and rules.
// You follow his way of building the house.

// Simple:
// React -> You decide what to do. (You call it)
// Angular -> Framework decides what to do. (It calls you)

// Main difference:
// Library -> You are more in control.
// Framework -> Framework is more in control.
// ======================================================


// 5) REACT SYNTAX
// Basic React syntax:

function ComponentName() {
    return (
        <>
            <h1>Hello React</h1>
        </>
    )
}

// Create a root:
const root = ReactDOM.createRoot(
    document.querySelector("#main")
)

// Show the component:
root.render(<ComponentName />)

// Simple:
// function -> Creates a component.
// return -> Tells what the component should show.
// <> </> -> Groups multiple elements.
// createRoot() -> Creates a place for React.
// render() -> Shows the React code on the page.
// ======================================================


// 6) WHAT IS JSX?
// JSX = JavaScript XML =meaning JavaScript + HTML-like code
// JSX is JavaScript with an extra feature
// that allows us to write HTML-like code inside JavaScript.


// JSX is an easier way to write React UI.
// In JSX, we can write HTML-like code directly inside JavaScript.

// Example:
const element = <h1>Hello React</h1>

// It looks like HTML,
// but it is written inside JavaScript.

// Simple:
// JSX -> HTML-like code written inside JavaScript.
// ======================================================


// 7) WHAT IS BABEL?
// Babel is another external JavaScript tool.

// Babel changes JSX into normal JavaScript.

// Browser understands JavaScript,
// but browser does not directly understand JSX.

// Simple:
// Babel = translator.

// JSX -> Babel translates JSX into -> JavaScript
// ======================================================



// 8) WHY DO WE NEED BABEL?
// Problem:
// Browser does not understand JSX directly.

// Example: const element = <h1>Hello</h1>

// Browser sees JSX, but it does not know how to run it.
// So Babel translates it.

// JSX
// ↓
// Babel
// ↓
// JavaScript
// ↓
// Browser

// Simple:
// Babel translates JSX so the browser can understand it.
// ======================================================


// 9) HOW TO USE BABEL?
// First, load Babel into our HTML file.
<script src="babel-link-here"></script>

// Then use type="text/babel"
// for the script where we write JSX.
<script type="text/babel">
    function Hero() {
        return <h1>Hello React</h1>
    }
</script>

// type="text/babel"
// tells Babel:
// "Translate the code inside this script."
// ======================================================


// 10) ReactDOM.createRoot()
// First, we need to choose
// where React should show our UI.

// In HTML:
<div id="main"></div>

// Select that element:
const container = document.querySelector("#main")

// Make it a React root:
const root = ReactDOM.createRoot(container)

// Simple:
// HTML element -> React root -> React UI

// Think of root as the place
// where React will put our UI.
// ======================================================


// 11) root.render()
// render() means: "Show this on the screen."

// Example: root.render(<h1>Hello</h1>)

// We can also show a component(Component = a function that returns JSX.): 
root.render(<Hero />)

// Simple:
// root.render() -> Tells React what to show.
// ======================================================


// 12) HOW TO DISPLAY MULTIPLE ELEMENTS?
// render() needs one main element.

// We cannot do this:
root.render(
    <h1>Hello</h1>,
    <p>Welcome</p>
)

// So we create one parent element and put all other elements inside it.
const div = (
    <div>
        <button>Submit</button>
        <p>Welcome to React</p>
    </div>
)
root.render(div)

// Here:
// div
// ├── button
// └── p

// We render the div,
// and the div contains the other elements.
// ======================================================


// 13) REACT FRAGMENT
// <> </> is called a React Fragment.

// It is used to group multiple elements.

// Example:
const elements = (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
)

// It groups the elements
// without creating an extra div.

// Simple:
// <> </> -> Group elements without adding a new HTML element.
// ======================================================


// 14) JAVASCRIPT INSIDE JSX
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
// ======================================================


// 15) VARIABLES INSIDE JSX
// We can create a variable and use it inside JSX.

const name = "Shiva"
const greeting = <h1>Hello {name}</h1>

// Output:
// Hello Shiva

// Simple:
// {name} -> Takes the value stored inside name.
// ======================================================


// 16) JSX ATTRIBUTES
// We can give attributes to JSX elements
// just like we do in HTML.

// Example:
<h1 id="title">Hello</h1>

// Example:
<img src="image.jpg" alt="My Image" />

// For CSS class,
// React uses "className" instead of "class".

<h1 className="title">Hello</h1>

// Simple:
// Attributes give extra information to an element.
// ======================================================


// 17) COMPONENTS
// Component = a small reusable part of our UI.
// We normally create a component using a function.

function Hero() {
    return (
        <>
            <h1>Welcome</h1>
            <p>This is my Hero section.</p>
        </>
    )
}

// We can use the component like this:
root.render(<Hero />)

// Simple:
// Function -> Component
// Component -> UI part
// <Hero /> -> Uses the Hero component.

// We can create many components:
//
// Navbar
// Hero
// About
// Contact
// Footer
//
// Then combine them to create a complete website.
// ======================================================


// 18) HOW REACT MAKES WEBSITE BUILDING EASIER?
// a) We can break a big website into small components.
//
// Example:
// Navbar
// Hero
// About
// Footer

// b) We can reuse the same component
// instead of writing the same code again.

// c) JSX lets us write HTML-like code
// directly inside JavaScript.

// d) We can put JavaScript values inside JSX
// using { }.

// e) React handles UI updates for us,
// so we don't have to manually change
// every part of the HTML.

// Simple:
// React = Create small reusable UI parts
// and combine them to build a complete website.
// ======================================================