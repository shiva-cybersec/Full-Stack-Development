let btn = document.querySelector("button")
let main = document.querySelector("main")

let arr = [
    "Success comes from consistent effort.",
    "Hard work creates opportunities.",
    "Small progress is still progress.",
    "Your mindset shapes your future.",
    "Discipline is the key to success.",
    "Failure is a part of learning.",
    "Knowledge grows when you share it.",
    "The brain becomes stronger with practice.",
    "Reading improves your understanding.",
    "Sleep helps your body recover.",
    "Exercise keeps your mind and body healthy.",
    "The Earth revolves around the Sun.",
    "Water covers most of the Earth's surface.",
    "Light travels faster than sound.",
    "The human brain has billions of neurons."
];

btn.addEventListener("click", function(){
    let div = document.createElement("div")
    let h1 = document.createElement("h1")   // moved inside, so a NEW h1 is made every click

    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let r = Math.random() * 360;
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    let a = arr[Math.floor(Math.random() * arr.length)]
    let x2 = Math.random() * 80;
    let y2 = Math.random() * 80;
    let rot = Math.random() * 360;
    let scl = Math.random() * 2;

    div.style.height = "100px"
    div.style.width = "100px"
    div.style.position = "absolute"
    div.style.left = x + "%"
    div.style.top = y + "%"
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.rotate = r + "deg"
    main.appendChild(div)

    h1.innerHTML = a;                       // fixed: use "a" directly, not arr[a]
    h1.style.position = "absolute";         // fixed: quoted string
    h1.style.left = x2 + "%"                // fixed: x2 instead of undefined x1
    h1.style.top = y2 + "%"
    h1.style.transform = `rotate(${rot}deg) scale(${scl})`   // fixed: rotate + scale combined via transform
    main.appendChild(h1)
})