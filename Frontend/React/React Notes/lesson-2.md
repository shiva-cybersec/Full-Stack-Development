// CONTENTS
// 1) React Setup
// 2) Components
// 3) Displaying Components
// 4) Curly Braces {}
// 5) Fragment
// 6) Props
// 7) Destructuring Props
// 8) && (Guard) Operator in JSX
// 9) App Component
********************************************************

1) REACT SETUP
// Creating elements manually with React.createElement()
// is difficult, so we use JSX.
// Vite = a tool used to quickly create and run React projects.

// SETUP STEPS:
// 1) Download and install Node.js.
//    → Just agree and click Next.

// 2) Open VS Code terminal and run:
//    npm create vite

// 3) Select:
//    Project name → your folder name
//    Package name → press Enter
//    Framework → React
//    Variant → JavaScript
//    Linter → ESLint
//    Install and start → Yes

// 4) Install these VS Code extensions:
//    1) Simple React Snippets
//    2) ES7+ React/Redux/React-Native snippets

// Old method:
// Create React App (CRA) was commonly used before,
// but Vite is now commonly used for creating React projects.
********************************************************


2) COMPONENT
// Component = a piece of a website.
// We split a website into small components
// so each part is easier to create and manage.
// Component is created using a function:
function ComponentName() {
    return (
        <h1>Hello</h1>
    )
}
- Component name must start with a capital letter.
- This naming style is called PascalCase.
- JSX is stricter than normal HTML.
- Elements should be properly closed.
// Example:
<input />
// Self-closing tags are used when an element has no content between opening and closing tag

********************************************************


3) DISPLAYING A COMPONENT
// We can display a component using:
<ComponentName />
// This is better than:
{ComponentName()}
// It looks like creating our own HTML element.

********************************************************


4) CURLY BRACES {}
// Inside JSX, {} allows us to write JavaScript.
// Example:
<h1>{name}</h1>
// We can put variables, calculations, function calls, etc. inside {}.

********************************************************




5) FRAGMENT
// Fragment = group elements without creating an extra <div>.

// Instead of:
<div>
    <h1>Hello</h1>
    <p>Welcome</p>
</div>
// Use:
<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>

********************************************************


6) PROPS
// Props = properties.
// Props are used to pass data from one component to another.
// Example:

<ComponentName message="Hello" sender="Shiva" />
// Every component receives props as an object.
// props = {
//     message: "Hello",
//     sender: "Shiva"
// }

********************************************************




7) DESTRUCTURING PROPS (in three ways)
- Normal way:
function ComponentName(props) {
    const message = props.message
}

- Destructuring:
function ComponentName(props) {
    const { message, sender } = props
}
- Shortest way:
function ComponentName({ message, sender }) {
}
// All three get values from the props object.

********************************************************



8) && OPERATOR IN JSX
- We cannot directly use (if) inside JSX.
- We can use && for simple conditions.
- Example:
{isLoggedIn && <h1>Welcome</h1>}
- If isLoggedIn is true → <h1> is shown.
- If isLoggedIn is false → nothing is shown.
- && works like a simple if condition.
********************************************************


9) APP COMPONENT
- App should be created using a function/component: 
function App() {
    return (
        <h1>Hello React</h1>
    )
}
********************************************************
