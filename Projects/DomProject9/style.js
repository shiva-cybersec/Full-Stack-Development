let love = document.querySelector(".card #love")
let img = document.querySelector(".card img")

img.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
    love.style.opacity = 1

    setTimeout(function(){
        love.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)"
    },800)
    setTimeout(function(){
        love.style.opacity = 0
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)"
    },1200)
})