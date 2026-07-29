let btn = document.querySelector("button")
let grow = 0
let h2 = document.querySelector("h2")
let inner = document.querySelector(".inner")
let p = document.querySelector("p")
btn.addEventListener("click", function(){
    btn.style.pointerEvents = "none"
    let num = 30 + Math.floor(Math.random() * 50)
    let interval = setInterval(function(){
        grow++;
        h2.innerHTML = grow+"%"
        inner.style.width = grow+"%"
    },num)

    setTimeout(function(){
       clearInterval(interval) 
       btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5
        p.innerHTML = `Your file is downloaded in ${num/10} seconds`
        btn.style.pointerEvents = "none"
    },num*100)
})