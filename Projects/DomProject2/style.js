let container = document.querySelector("#container");
let heart = document.querySelector("#container i");

container.addEventListener("dblclick", function(){

    heart.style.opacity = "1";
    heart.style.transform = "translate(-50%,-50%) scale(1.3)";

    setTimeout(function(){

        heart.style.transform = "translate(-50%,-50%) scale(1)";

    },150);

    setTimeout(function(){

        heart.style.opacity = "0";
        heart.style.transform = "translate(-50%,-50%) scale(0)";

    },900);

});
